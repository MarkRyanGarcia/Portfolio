<div class="about-section">
    <!-- Left: Text -->
    <div class="about-text">
        <h1 class="text-5xl font-bold text-blue-600">About Me</h1>
        <p class="text-gray-700 text-lg mt-4 leading-relaxed">
            Hi! 👋 I'm <span class="font-semibold">Mark :)</span><br>
            An undergraduate student at <span class="font-semibold">CSU Fullerton 🐘</span> | CS Major, Math Minor
        </p>

        <p class="text-gray-700 text-lg mt-4 leading-relaxed">
            I'm a full-time student while working two jobs, but I'm still trying to find time to work on projects! 😄
        </p>

        <ul class="text-gray-700 text-lg mt-4 leading-relaxed space-y-2">
            <li>📷 <span class="font-semibold">Marketing Team Lead</span> for ACM at CSUF</li>
            <li>📐 <span class="font-semibold">Supplemental Instructor</span> for Calculus II (because Math is just so fun!)</li>
            <li>💻 I have experience with: Python, C/C++, C#, JavaScript, HTML/CSS, GDScript, Intel x86-64 ISA, SQL, and always learning more...</li>
            <li>💯 Fun fact: I have a collection of <span class="font-semibold">60+ Rubik's Cubes</span></li>
        </ul>
    </div>

    <!-- Right: Images -->
    <div class="about-images">
        <img src="/image2.png" class="about-img">
        <img src="/image3.png" class="about-img">
        <img src="/wordhunt.png" alt="Image 3" class="about-img">
        <img src="/cubes.png" class="about-img">
    </div>
</div>


<style>
.about-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 2rem;
}

/* Left side: Text (50% width) */
.about-text {
    width: 50%;
    min-width: 350px;
    padding: 2rem;
}

/* Right side: Images (50% width) */
.about-images {
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 images per row */
    gap: 1rem;
    padding: 2rem;
}

/* Image styles */
.about-img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
    transition: filter 0.3s ease; /* Smooth transition */
    filter: grayscale(90%); /* Make images black and white */
}

/* Hover effect */
.about-img:hover {
    filter: grayscale(0%); /* Remove grayscale on hover */
}

/* Responsive for mobile */
@media (max-width: 768px) {
    .about-section {
        flex-direction: column;
        text-align: center;
    }

    .about-text, .about-images {
        width: 100%;
    }

    .about-images {
        grid-template-columns: repeat(1, 1fr); /* 1 image per row on mobile */
    }
}
</style>