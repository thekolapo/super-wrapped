import { ref, onMounted, onBeforeUnmount } from "vue";
import Matter from "matter-js";

export const useMatterPhysics = () => {
  const container = ref(null);

  let engine, render, runner, bodiesArray, mouseConstraint;

  /**
   * @param {string} containerId - ID of the container element
   * @param {Array} items - Array of objects for the bodies
   * @param {Object} options - Extra options:
   *   - circleSize: base size for bodies
   *   - useSprite: true if items have sprite images instead of labels
   */
  const initPhysicsEngine = (containerId, items, options = {}) => {
    const {
      Engine,
      Render,
      Runner,
      MouseConstraint,
      Mouse,
      Composite,
      Bodies,
      Events,
    } = Matter;

    const { circleSize: baseCircleSize = 62, useSprite = false } = options;

    engine = Engine.create();
    engine.world.gravity.y = 1.1;

    // Get container
    const containerEl = document.getElementById(containerId);
    if (!containerEl) return;
    container.value = containerEl;

    const containerWidth = containerEl.offsetWidth;
    const containerHeight =
      containerEl.offsetHeight || window.innerHeight * 0.6;

    const windowWidth = window.innerWidth;
    const sizeMultiplier = windowWidth > 720 ? 1 : windowWidth / 750;
    const circleSize = baseCircleSize * sizeMultiplier;

    // Create renderer
    render = Render.create({
      element: containerEl,
      engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        wireframes: false,
        background: "transparent",
        pixelRatio: "auto",
      },
    });

    // Create bodies
    bodiesArray = items.map((item) => {
      const circle = Bodies.circle(
        Math.random() * containerWidth,
        -containerHeight * 0.5,
        circleSize,
        {
          render: useSprite
            ? {
                sprite: {
                  texture: item.texture,
                  xScale: circleSize / 55.5,
                  yScale: circleSize / 55.5,
                },
              }
            : {
                fillStyle: item.color || "#fff",
              },
          label: item.label || item.name || "",
          restitution: 0.7,
        }
      );
      return circle;
    });

    // Boundaries
    const ground = Bodies.rectangle(
      containerWidth / 2,
      containerHeight,
      containerWidth * 1.2,
      containerHeight * 0.008,
      { isStatic: true, render: { fillStyle: "transparent" } }
    );
    const roof = Bodies.rectangle(
      containerWidth / 2,
      -containerHeight * 0.7,
      containerWidth * 1.2,
      containerHeight * 0.1,
      { isStatic: true, render: { fillStyle: "transparent" } }
    );
    const leftWall = Bodies.rectangle(
      0,
      containerHeight / 2,
      containerWidth * 0.01,
      containerHeight * 2,
      { isStatic: true, render: { fillStyle: "transparent" } }
    );
    const rightWall = Bodies.rectangle(
      containerWidth,
      containerHeight / 2,
      containerWidth * 0.01,
      containerHeight * 2,
      { isStatic: true, render: { fillStyle: "transparent" } }
    );

    ground.restitution = leftWall.restitution = rightWall.restitution = 1;

    Composite.add(engine.world, [
      ...bodiesArray,
      ground,
      roof,
      leftWall,
      rightWall,
    ]);

    // Render text if not using sprite
    if (!useSprite) {
      Events.on(render, "afterRender", () => {
        const context = render.context;
        bodiesArray.forEach((body) => {
          const { x, y } = body.position;
          const angle = body.angle;

          context.save();
          context.translate(x, y);
          context.rotate(angle);

          context.fillStyle = "#FFFFFF";
          context.font = `${
            circleSize * 0.3
          }px UniversalSans, Inter, sans-serif`;
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText(body.label, 0, 0);

          context.restore();
        });
      });
    }

    // Mouse
    const mouse = Mouse.create(render.canvas);
    mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });

    // Prevent scroll interference
    mouseConstraint.mouse.element.removeEventListener(
      "mousewheel",
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      "DOMMouseScroll",
      mouseConstraint.mouse.mousewheel
    );

    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Run
    Render.run(render);
    runner = Runner.create();
    Runner.run(runner, engine);
  };

  const destroyPhysicsEngine = () => {
    if (render) Render.stop(render);
    if (runner) Runner.stop(runner);
    if (engine) Matter.Engine.clear(engine);
    bodiesArray = [];
  };

  return { container, initPhysicsEngine, destroyPhysicsEngine };
};
