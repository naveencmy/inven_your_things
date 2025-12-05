# Inventory Management System – Backend (Express + PostgreSQL)

A modular, scalable backend system built for **inventory, sales, workers, admin management**, designed with clean architecture and ready for CI/CD deployment.  
This project is a part of the **InvoN – Your Thing** software suite.

---

## 🚀 Features

### 🔐 Authentication + Roles
- JWT-based login
- **Admin, Worker, Superadmin** role system
- Admin can create workers
- Workers can add products and sales
- Admin can view sales reports

### 📦 Product Management
- Add new products
- Fetch all products
- Automatic stock updates when a sale is made

### 💰 Sales Management
- Worker can enter sales
- Auto decrement product quantity
- Admin can view sales reports

### 🧱 Modular Architecture
Each feature has its own:
- Controller
- Service
- Repository
- Routes

Easy to expand with new modules (credits, billing, analytics, POS, etc.)

---

## 🛠 Tech Stack

| Layer | Technology |
|------|------------|
| Backend Framework | **Node.js + Express.js** |
| Database | **PostgreSQL** |
| Auth | **JWT (jsonwebtoken)** |
| ORM/Query | **pg (PostgreSQL client)** |
| Security | **Helmet, CORS** |
| Development | **Nodemon** |

---

## 📁 Folder Structure

Backend/
InventoryApp/
src/
config/
db.js # DB connection
env.js # environment config (optional)
core/
auth.js # role middleware
errors.js # global error handler
modules/
auth/
auth.controller.js
auth.service.js
auth.repo.js
auth.routes.js
products/
product.controller.js
product.service.js
product.repo.js
product.routes.js
sales/
sale.controller.js
sale.service.js
sale.repo.js
sale.routes.js
routes/
index.js
app.js
server.js
migrations/
001_init.sql # DB schema
.env
Dockerfile
package.json

---

## 🔧 Environment Variables (`.env`)

Postgres DB Config
DB_USER=postgres
DB_PASS=YOUR_PASSWORD
DB_HOST=localhost
DB_NAME=inventoryapp
DB_PORT=5432
Server
PORT=5000
JWT Secret
JWT_SECRET=supersecretkey123

---

## 🗄 Database Schema

### `products`
| Field | Type |
|-------|------|
| id | SERIAL PK |
| name | VARCHAR(100) |
| price | NUMERIC |
| qty | INT |

### `sales`
| Field | Type |
|-------|------|
| id | SERIAL PK |
| product_id | INT FK |
| qty | INT |
| created_at | TIMESTAMP |

### `users`
| Field | Type |
|-------|------|
| id | SERIAL PK |
| name | TEXT |
| email | TEXT UNIQUE |
| password | TEXT |
| role | TEXT (worker/admin/superadmin) |

---

## ▶ Running the Backend

Install dependencies:
dnddd


## 👥 Team

Naveen Kumar M – Backend & DevOps
Mukesh – Database Designer
Roshan – Frontend (React/React Native)

## 📜 License

MIT License — free to use and modify.