# 02 — Complete the Backend

**Time:** ~20 minutes  
**Feature:** Inline completions, `/explain`, `/fix`, `@workspace`

> Don't worry if you haven't written Kotlin before — Copilot has you covered. This part shows how Copilot bridges language and framework gaps.

---

## The backend at a glance

```
backend/src/main/kotlin/com/webshop/
├── controller/   ← HTTP layer (REST endpoints)
├── service/      ← Business logic
├── repository/   ← Database access (JPA)
└── model/        ← Data classes (entities)
```

The **models** and **repositories** are complete. The **services** and **controllers** have stubs for you to fill in.

---

## Step 1 — Understand the data layer with `/explain`

Open `backend/src/main/kotlin/com/webshop/repository/ProductRepository.kt`.

Select the whole file, open Copilot Chat, and type:
```
/explain
```

Copilot will explain what `JpaRepository` gives you for free, what `findByCategory` and `findByNameContainingIgnoreCase` do, and how Spring generates SQL from the method names.

---

## Step 2 — Use `@workspace` for cross-file understanding

In Copilot Chat, ask:

```
@workspace How does the Product entity map to the H2 database? Trace from the model to the SQL.
```

Watch Copilot trace `Product.kt` → `ProductRepository.kt` → `application.yml` → `data.sql` in a single answer.

---

## Step 3 — Implement GET /api/orders

Open `OrderController.kt`. Find the `getAllOrders()` method with the TODO comment.

**Option A — Inline completion:**  
Delete the TODO comment and the `return` line, then type `return ResponseEntity.ok(` and let Copilot complete it.

**Option B — Chat:**  
Select the method body, then in Copilot Chat type:
```
Implement this to call orderService.getAllOrders() and return 200 OK
```

Do the same for `getOrderById()`.

---

## Step 4 — Implement POST /api/orders

This is the most complex stub. The `createOrder` method needs to:
1. Map `CreateOrderRequest.items` to something the service understands
2. Call `orderService.createOrder(...)`
3. Return `201 Created` with the saved order

In Copilot Chat, with `OrderController.kt` open, ask:
```
@workspace Implement createOrder in OrderController. 
Map the request items to the service, return 201 Created.
```

Review what Copilot generates — it may also suggest completing `OrderService.kt`. Accept the changes.

> **Import note:** `CreateOrderItemCommand` is defined in `OrderService.kt`, so it needs to be imported in `OrderController.kt`. If you see a red squiggle on that type, use `/fix` or accept the import Copilot adds automatically.

---

## Step 5 — Complete OrderService

Open `OrderService.kt` and look at the `createOrder` stub.

Place your cursor inside the function body and press `Tab` or `Alt+\` to trigger an inline suggestion. If nothing appears, use Chat:

```
Implement createOrder: look up each product, reduce stock, create an Order with OrderItems, save and return it
```

> ⚠️ If Copilot generates code that doesn't compile, select the error and use `/fix`.

---

## Step 6 — Verify in H2 console

1. Make sure the backend is running (`./gradlew bootRun`)
2. Go to **http://localhost:8080/h2-console**
3. JDBC URL: `jdbc:h2:mem:webshopdb`, User: `sa`, Password: *(empty)*
4. Run: `SELECT * FROM PRODUCT;` — you should see 10 rows
5. Use a tool like `curl` or the browser to test:

```bash
curl http://localhost:8080/api/products
```

```bash
curl -X POST http://localhost:8080/api/orders \
  -H "Content-Type: application/json" \
  -d '{"customerName":"Alice","customerEmail":"alice@example.com","items":[{"productId":1,"quantity":2}]}'
```

---

## Copilot prompts to try

| Prompt | What it demonstrates |
|--------|----------------------|
| `/explain` on `ProductRepository.kt` | Understanding unfamiliar code |
| `@workspace How does CORS work here?` | Cross-file awareness |
| `/fix` on a compile error | Error recovery |
| `Generate a curl command to test POST /api/orders` | Dev productivity |

---

**Next:** [Part 3 — Wire the Frontend →](./03-wire-the-frontend.md)
