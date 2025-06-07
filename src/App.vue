<template>
  <div class="app">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <a href="#" class="logo"><img src="@/assets/logo-rain.png" alt="Rainelyn Sungahid"></a>
      </div>
  
    </nav>

    <!-- Hero Section -->
    <section id="about" class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>Rainelyn Sungahid</h1>
            <h2>Computer Engineering Student</h2>
            <p>
              Passionate Computer Engineering student with developing experience in
              full-stack development, UI/UX design, and project management. Skilled in
              building and deploying software solutions, with a strong drive to apply and
              grow technical skills in real-world settings.
            </p>
            <div class="hero-buttons">
              <a href="#projects" class="btn btn-primary">View Projects</a>
              <a href="#" class="btn btn-outline">Download Resume</a>
            </div>
          </div>
          <div class="hero-image">
            <img src="@/assets/profile.png" alt="Rainelyn Sungahid">
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="section">
      <div class="container">
        <h2 class="section-title">Education & Organizations</h2>
        <p class="section-subtitle">My academic journey and organizations</p>
        
        <div class="education-list">
          <div v-for="(item, index) in education" :key="index" class="education-item">
            <div class="education-period">
              <p>{{ item.period }}</p>
              <img :src="item.logoUrl" :alt="item.institution">
            </div>
            <div class="education-details">
              <h3>{{ item.degree }}</h3>
              <p class="institution">{{ item.institution }}</p>
              <p class="description">{{ item.description }}</p>
              <div v-if="item.achievements" class="achievements">
                <p class="achievements-title">Key Achievements:</p>
                <ul>
                  <li v-for="(achievement, i) in item.achievements" :key="i">
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="organizations">
          <h3 class="organizations-title">Organizations</h3>
          <div class="organizations-grid">
            <div v-for="(org, index) in organizations" :key="index" class="organization-card">
              <div class="org-icon">
                <i :class="org.icon"></i>
              </div>
              <div>
                <h4>{{ org.name }}</h4>
                <p class="org-position">{{ org.issuer }}</p>
                <p class="org-date">Issued: {{ org.date }}</p>
                <p class="org-desc">{{ org.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section bg-gray">
      <div class="container">
        <h2 class="section-title">Technical Skills</h2>
        <p class="section-subtitle">My expertise across various technologies</p>
        
        <div class="skills-grid">
          <div v-for="(skill, index) in skills" :key="index" class="skill-card">
            <div class="skill-icon">
              <i :class="skill.icon"></i>
            </div>
            <h3>{{ skill.name }}</h3>
            <div class="skill-level">
              <div class="skill-progress" :style="{ width: skill.proficiency + '%' }"></div>
            </div>
            <p class="skill-level-text">{{ skill.level }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">My recent work showcasing technical abilities</p>
        
        <div class="projects-grid">
          <div v-for="(project, index) in projects" :key="index" class="project-card" @click="openProjectModal(project)">
            <div class="project-image">
              <img :src="project.imageUrl" :alt="project.title">
              <div class="project-overlay">
                <button class="view-details">View Details</button>
              </div>
            </div>
            <div class="project-info">
              <h3>{{ project.title }}</h3>
              <p>{{ project.shortDescription }}</p>
              <div class="project-tech">
                <span v-for="(tech, i) in project.technologies.slice(0, 3)" :key="i">{{ tech }}</span>
                <span v-if="project.technologies.length > 3">+{{ project.technologies.length - 3 }} more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section bg-gray">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">Have a question or want to collaborate?</p>
        
        <div class="contact-content">
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="contactForm.name" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="contactForm.email" required>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="contactForm.message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
          
          <div class="contact-info">
            <div class="info-group">
              <h3>Contact Information</h3>
              <div class="info-item">
                <i class="fas fa-envelope"></i>
                <a href="mailto:rainelynsungahid@gmail.com">rainelynsungahid@gmail.com</a>
              </div>
              <div class="info-item">
                <i class="fas fa-phone"></i>
                <span>(+63) 976-350-6685</span>
              </div>
              <div class="info-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>Cogon Pardo, Cebu City, Philippines</span>
              </div>
            </div>
            
            <div class="social-links">
              <h3>Connect With Me</h3>
              <div class="social-icons">
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-medium-m"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }} Rainelyn Sungahid. All rights reserved.</p>
        <p>Last updated: {{ lastUpdated }}</p>
      </div>
    </footer>

    <!-- Project Modal -->
    <ProjectModal 
      v-if="selectedProject" 
      :project="selectedProject" 
      @close="closeProjectModal" 
    />
  </div>
</template>

<script src="./script.js"></script>
<!-- <style src="./style.css"></style> -->