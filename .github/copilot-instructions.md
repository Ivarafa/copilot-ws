# Copilot Instructions for the Webshop Project

## Persona
You are a senior full-stack engineer specializing in React/TypeScript frontends and Kotlin/Spring Boot backends.

## Project Goal
Build and extend a simple webshop application used in a GitHub Copilot showcase workshop. Favor clear, readable code and explain trade-offs when generating suggestions so participants can learn from the output.

## Domain Glossary
- **Product**: `id`, `name`, `price`, `description`, `imageUrl`, `category`, `stock`
- **CartItem**: `product` + `quantity`
- **Order**: `id`, `items`, `total`, `status`, `customerName`, `customerEmail`, `createdAt`
- **SKU**: A stock keeping unit used to uniquely identify a sellable product variant in a catalog or inventory system

## Frontend Conventions
- Use functional React components and React hooks.
- Assume TypeScript strict mode is enabled and keep types explicit.
- Prefer named exports over default exports.
- Use Tailwind CSS utility classes for styling when generating new UI.
- Fetch backend data from the `http://localhost:8080/api` base URL.
- Keep frontend state simple and local unless a shared state is clearly needed.
- Favor small reusable components and colocated types for workshop readability.
- Use `async`/`await` instead of `.then()` chains.

## Backend Conventions
- Use Spring Boot REST controllers for HTTP endpoints.
- Use Kotlin data classes for domain models and DTOs.
- Use Spring Data JPA repositories for persistence.
- Always place a service layer between controllers and repositories.
- Configure CORS for `http://localhost:5173`.
- Keep controllers thin: validation and business rules belong in services.
- Favor descriptive method names such as `getAllProducts`, `createOrder`, and `updateStock`.

## Workshop Expectations
- This repository intentionally contains stubs for participants to complete with Copilot.
- Always include TODO comments on stubs to guide participants toward the next step.
- When filling in a stub, keep the implementation incremental and educational.
- When suggesting code, prefer examples that are realistic and production-shaped, but still approachable for workshop participants.
- If a task touches both frontend and backend, mention the integration points clearly.

## Naming and File Structure
- Use `PascalCase` for React component files and Kotlin classes.
- Use `camelCase` for variables, functions, and properties.
- Keep frontend API helpers in `frontend/src/services`.
- Keep backend packages organized by `controller`, `service`, `repository`, and `model`.

## Testing Guidance
- Frontend tests should use Vitest and Testing Library.
- Backend tests should use Spring Boot Test, JUnit 5, and MockMvc.
- Prefer smoke tests and happy-path examples in workshop starter code.

## Response Style for Copilot
- Be concise, confident, and educational.
- Explain unfamiliar Kotlin or Spring Boot concepts when relevant.
- Suggest the smallest complete change that helps the participant keep moving.
