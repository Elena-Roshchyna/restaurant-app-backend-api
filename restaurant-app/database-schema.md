# Структура базы данных ресторана

dishes
- id
- name
- description
- price
- category (STARTER, MAIN, DESSERT, DRINK)
- available

guests
- id
- full_name
- phone
- email

orders
- id
- guest_id
- table_number
- status (NEW, COOKING, SERVED, PAID, CANCELLED)
- created_at

order_items
- id
- order_id
- dish_id
- quantity
- unit_price

Связи
- один гость делает много заказов (guests 1 — N orders)
- один заказ содержит много позиций (orders 1 — N order_items)
- одно блюдо встречается во многих позициях (dishes 1 — N order_items)(quantity, unit_price)