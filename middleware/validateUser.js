const validateUser = (req, res, next) => {
    const { name, email, phone, start_date, end_date } = req.body;

    if (!name || typeof name !== 'string' || !/^[a-zA-Z]+$/.test(name)) {
        return res.status(400).json({ error: "Name must contain only letters and cannot be empty." });
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ error: "Invalid email format." });
    }

    if (phone && !/^\+32\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/.test(phone)) {
        return res.status(400).json({ error: "Phone number must be in format '+32 444 44 44 44'." });
    }

    if (start_date && end_date) {
        const start = new Date(start_date);
        const end = new Date(end_date);
        if (isNaN(start) || isNaN(end) || end <= start) {
            return res.status(400).json({ error: "End date must be after start date." });
        }
    }

    next();
};

module.exports = validateUser;
