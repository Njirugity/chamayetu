INSERT INTO members (member_id, first_name, last_name, email, password_hash, phone_number, is_admin, is_active)
VALUES
('FR-01', 'Alice', 'Johnson', 'alice@example.com', 'testmember', '1234567890', TRUE, TRUE),
('FR-02', 'Bob', 'Smith', 'bob@example.com', 'testmember', '0987654321', FALSE, TRUE),
('FR-03', 'Charlie', 'Brown', 'charlie@example.com', 'testmember', '1122334455', FALSE, FALSE),
('FR-04', 'Diana', 'Prince', 'diana@example.com', 'testmember', '2233445566', TRUE, TRUE),
('FR-05', 'Ethan', 'Hunt', 'ethan@example.com', 'testmember', '3344556677', FALSE, TRUE);

INSERT INTO contributions (member_id, amount, total_contributions)
VALUES
('FR-01', 5000.00, 5000.00),
('FR-02', 3000.00, 3000.00),
('FR-03', 5000.00, 5000.00),
('FR-04', 7000.00, 7000.00),
('FR-05', 4000.00, 4000.00);

INSERT INTO loans (member_id, amount, interest_rate, due_date, loan_status, loan_balance)
VALUES
('FR-01', 1000.00, 10.00, DATE_ADD(CURRENT_DATE, INTERVAL 1 YEAR), 'Paid', 0.00),
('FR-01', 1500.00, 10.00, DATE_ADD(CURRENT_DATE, INTERVAL 1 YEAR), 'Unpaid', 1500.00),

('FR-02', 2000.00, 10.00, DATE_ADD(CURRENT_DATE, INTERVAL 1 YEAR), 'Partially Paid', 1000.00),
('FR-02', 500.00, 10.00, DATE_ADD(CURRENT_DATE, INTERVAL 1 YEAR), 'Paid', 0.00),

('FR-03', 750.00, 10.00, DATE_ADD(CURRENT_DATE, INTERVAL 1 YEAR), 'Unpaid', 750.00),
('FR-03', 1200.00, 10.00, DATE_ADD(CURRENT_DATE, INTERVAL 1 YEAR), 'Partially Paid', 600.00),

('FR-04', 3000.00, 10.00, DATE_ADD(CURRENT_DATE, INTERVAL 1 YEAR), 'Paid', 0.00),
('FR-04', 1800.00, 10.00, DATE_ADD(CURRENT_DATE, INTERVAL 1 YEAR), 'Unpaid', 1800.00),

('FR-05', 500.00, 10.00, DATE_ADD(CURRENT_DATE, INTERVAL 1 YEAR), 'Partially Paid', 250.00),
('FR-05', 2200.00, 10.00, DATE_ADD(CURRENT_DATE, INTERVAL 1 YEAR), 'Paid', 0.00);

INSERT INTO loan_repayments (member_id, loan_id, amount)
VALUES
('FR-01', 1, 1000.00),
('FR-02', 3, 1000.00),
('FR-02', 4, 500.00),
('FR-03', 6, 600.00),
('FR-04', 7, 3000.00),
('FR-05', 9, 250.00),
('FR-05', 10, 2200.00);



