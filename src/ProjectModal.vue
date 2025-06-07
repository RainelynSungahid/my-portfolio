<template>
  <div class="modal">
    <div class="modal-content">
      <button class="modal-close" @click="$emit('close')">
        <i class="fas fa-times"></i>
      </button>
      
      <div class="modal-image">
        <img :src="project.imageUrl" :alt="project.title">
      </div>
      
      <div class="modal-body">
        <h2>{{ project.title }}</h2>
        <p class="modal-description">{{ project.fullDescription }}</p>
        
        <div class="modal-section">
          <h3>Technologies Used</h3>
          <div class="tech-tags">
            <span v-for="(tech, index) in project.technologies" :key="index">
              {{ tech }}
            </span>
          </div>
        </div>
        
        <div class="modal-section">
          <h3>Contributions</h3>
          <ul class="features-list">
            <li v-for="(feature, index) in project.features" :key="index">
              {{ feature }}
            </li>
          </ul>
        </div>
        
        <div class="modal-actions">
          <a :href="project.demoUrl" target="_blank" class="btn btn-primary">
            <i class="fas fa-external-link-alt"></i> Live Demo
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background-color: white;
  border-radius: 0.5rem;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text);
}

.modal-image {
  height: 300px;
  overflow: hidden;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-body {
  padding: 2rem;
}

.modal-body h2 {
  font-size: 2rem;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.modal-description {
  margin-bottom: 2rem;
  line-height: 1.7;
}

.modal-section {
  margin-bottom: 2rem;
}

.modal-section h3 {
  font-size: 1.3rem;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tags span {
  background: var(--primary-light);
  color: var(--primary-dark);
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 500;
}

.features-list {
  padding-left: 1.5rem;
}

.features-list li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.btn-dark {
  background: var(--bg-dark);
  color: white;
}

.btn-dark:hover {
  background: #000;
}
</style>