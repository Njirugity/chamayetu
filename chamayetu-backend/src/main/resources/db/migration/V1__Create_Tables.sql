-- Create members table
CREATE TABLE members  (
    member_id VARCHAR(10) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE
);

--Create contributions table
CREATE TABLE contributions (
    contribution_id SERIAL PRIMARY KEY,
    member_id VARCHAR(10) NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_contributions DECIMAL(15,2) NOT NULL,
    FOREIGN KEY (member_id) REFERENCES members (member_id) ON DELETE CASCADE
);


--Create loans table
CREATE TABLE loans (
    loan_id SERIAL PRIMARY KEY,
    member_id VARCHAR(10) NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    interest_rate DECIMAL(5,2) NOT NULL,
    due_date DATE NOT NULL,
    loan_status VARCHAR(50) NOT NULL,
    loan_balance DECIMAL(15,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (member_id) REFERENCES members (member_id) ON DELETE CASCADE
);

--Create loan_repayments table
CREATE TABLE loan_repayments (
    repayment_id SERIAL PRIMARY KEY,
    member_id VARCHAR(10) NOT NULL,
    loan_id INT NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (loan_id) REFERENCES loans (loan_id) ON DELETE CASCADE,
    FOREIGN KEY (member_id) REFERENCES members (member_id) ON DELETE CASCADE

);

