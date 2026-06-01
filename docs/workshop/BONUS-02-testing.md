# BONUS 02 — Testing with Copilot

**Self-paced bonus task**  
**Feature:** `/tests`, inline test generation, `/fix` on failing tests

---

## Frontend — Vitest + React Testing Library

### Generate a test for `ProductCard`

1. Open `frontend/src/components/ProductCard.tsx`
2. In Copilot Chat, type:
   ```
   /tests
   ```
   Copilot will generate a Vitest test file for the component.

3. Review the generated test — it should cover:
   - Renders with a product name
   - "Add to Cart" button calls `onAddToCart`
   - Button is disabled when `stock === 0`

4. Save it as `frontend/src/components/ProductCard.test.tsx`

5. Run the tests:
   ```bash
   cd frontend
   npm test
   ```

6. If any tests fail, select the error output and use:
   ```
   /fix
   ```

### Generate a test for the API service

Ask Copilot:
```
Generate a Vitest test for api.ts that mocks fetch and verifies fetchProducts() returns an array of products
```

---

## Backend — JUnit 5 + MockMvc

### Complete the stub test

Open `backend/src/test/kotlin/com/webshop/ProductControllerTest.kt`.

In Copilot Chat:
```
/tests Generate a MockMvc test for GET /api/products that verifies:
- Status is 200
- Response is a JSON array
- Each item has an "id", "name", and "price" field
```

### Generate an order test

Ask:
```
Generate a MockMvc integration test for POST /api/orders that:
- Creates an order with one item
- Verifies the response status is 201
- Verifies the returned order has a non-null id
```

Run backend tests:
```bash
cd backend
./gradlew test
```

---

## 💡 Key takeaway

Copilot's `/tests` command generates test scaffolding instantly. Use it as a starting point, not a final answer — always review and refine what it generates.

> **Pro tip:** Write failing tests first, then ask Copilot to implement the code that makes them pass. This is Copilot-assisted TDD.
