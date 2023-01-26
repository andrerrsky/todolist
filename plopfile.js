module.exports = (plop) => {
  plop.setGenerator("🧱 Component", {
    description: "Creates the basic component structure.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "./src/components/{{pascalCase name}}/index.ts",
        templateFile: "./generators/plop/templates/components/index.ts.hbs",
      },
      {
        type: "add",
        path: "./src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile:
          "./generators/plop/templates/components/component.tsx.hbs",
      },
      {
        type: "add",
        path: "./src/components/{{pascalCase name}}/{{pascalCase name}}.style.ts",
        templateFile: "./generators/plop/templates/components/style.ts.hbs",
      },
      {
        type: "add",
        path: "./src/components/{{pascalCase name}}/{{pascalCase name}}.types.ts",
        templateFile: "./generators/plop/templates/components/types.ts.hbs",
      },
    ],
  });

  plop.setGenerator("🧰 Util", {
    description: "Creates the basic util structure.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your util name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "./src/utils/{{camelCase name}}/index.ts",
        templateFile: "./generators/plop/templates/utils/index.ts.hbs",
      },
      {
        type: "add",
        path: "./src/utils/{{camelCase name}}/{{camelCase name}}.ts",
        templateFile: "./generators/plop/templates/utils/util.ts.hbs",
      },
      {
        type: "add",
        path: "./src/utils/{{camelCase name}}/{{camelCase name}}.test.ts",
        templateFile: "./generators/plop/templates/utils/test.ts.hbs",
      },
      {
        type: "add",
        path: "./src/utils/{{camelCase name}}/{{camelCase name}}.types.ts",
        templateFile: "./generators/plop/templates/utils/types.ts.hbs",
      },
    ],
  });
};
