import SwaggerJsDoc from 'swagger-jsdoc';

const options: SwaggerJsDoc.Options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Simple Blog API",
            version: "1.0.0",
            description: "A minimal CRUD API for users and blogs",
        },
        servers: [{ url: "http://localhost:3000", description: "Development server" }],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [{ bearerAuth: [] }],
    },
    apis: ["../src/routes/*.ts", "../src/models/*.ts"],
};

export const swaggerSpec = SwaggerJsDoc(options);

export default swaggerSpec;