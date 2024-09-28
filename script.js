window.onload = function() {
    // Create a list of email addresses
    var emails = [
        "ppnerfs@zohomail.eu",
        "ppnerfs@zohomail.eu",
        "ppnerfs@zohomail.eu",
        "ppnerfs@zohomail.eu"
    ];

    // Generate a random index
    var randomIndex = Math.floor(Math.random() * emails.length);

    // Get a random email
    var randomEmail = emails[randomIndex];

    // Create a new paragraph element
    var paragraph = document.createElement("p");

    // Set the ID attribute of the paragraph element
    paragraph.id = "your_id_here";

    // Set the text content of the paragraph element
    paragraph.textContent = randomEmail;

    // Append the paragraph element to the placeholder div
    document.getElementById("emailField").appendChild(paragraph);
}

