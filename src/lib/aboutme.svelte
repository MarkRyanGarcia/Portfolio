<div class="about-section">
    <div class="about-images">
        <img src="/aimage1.png" class="about-img">
        <img src="/aimage2.png" class="about-img">
        <img src="/aimage3.png" class="about-img">
        <img src="/aimage4.png" class="about-img">
    </div>

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

    <div class="about-images">
        <img src="/aimage5.png" class="about-img">
        <img src="/aimage6.png" class="about-img">
        <img src="/aimage7.png" class="about-img">
        <img src="/aimage8.png" class="about-img">
    </div>
</div>


<style>
.about-section {
    display: flex;
    flex-direction: column; /* Stacks elements vertically */
    width: 100%;
    padding: 2rem;
}

.about-images {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Four images per row */
    gap: 1rem;
    padding: 2rem 0; /* Padding only on top and bottom */
}

.about-text {
    padding: 2rem;
    text-align: center; /* Center text for better presentation */
}

.about-img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
    transition: filter 0.3s ease;
    filter: grayscale(90%);
}

.about-img:hover {
    filter: grayscale(0%);
}

/* Responsive for mobile */
@media (max-width: 768px) {
    .about-images {
        grid-template-columns: repeat(2, 1fr); /* Two images per row on smaller screens */
    }

    .about-text {
        width: 100%;
    }
}
</style>