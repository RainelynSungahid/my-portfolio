import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import ProjectModal from './ProjectModal.vue';

export default {
  components: {
    ProjectModal
  },
  setup() {
    const mobileMenuOpen = ref(false);
    const selectedProject = ref(null);
    const contactForm = ref({
      name: '',
      email: '',
      message: ''
    });

    const currentYear = computed(() => new Date().getFullYear());
    const lastUpdated = computed(() => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date().toLocaleDateString('en-US', options);
    });


    const education = [
      {
        period: '2022 - 2026',
        institution: 'Cebu Institute of Technology - University',
        degree: 'Bachelor of Science in Computer Engineering',
        description: 'Comprehensive program covering hardware and software aspects with minor in Data Science.',
        achievements: [
          'DOST Scholar, Cebu City Scholar, ANCOP Scholar',
          'Dean\'s Lister (2024-2025)',
          'GPA: 4.67/5.0 (1st year to 3rd year 1st semester)',
        ],
        logoUrl: new URL('@/assets/cit-logo.png', import.meta.url).href
      }
    ];

    const organizations = [
      {
        name: 'DOST SA CIT-U',
        issuer: 'Creatives Committee Member',
        date: '2022 - Present',
        description: 'Contributed to various creative projects and initiatives within the organization.',
        icon: 'fab fa-aws'
      },
      {
        name: 'Google Developer Group on Campus CIT-U',
        issuer: 'GDGOC Member',
        date: '2024 - Present',
        description: 'Engaged in community-driven projects and workshops using Google technologies.',
        icon: 'fas fa-brain'
      },
      {
        name: 'Honor Society CIT-U',
        issuer: 'Email Administrator - Committee on Rules and Regulations',
        date: '2024 - Present',
        description: 'Responsible for managing email communications and upholding organizational standards.',
        icon: 'fab fa-microsoft'
      },
      {
        name: 'ICPEP.SE CIT-U Chapter',
        issuer: 'Secretary - Committee on External Affairs',
        date: '2024 - Present',
        description: 'Managed external communications and partnerships for the organization.',
        icon: 'fas fa-dharmachakra'
      }
    ];

    const skills = [
      { name: 'C', icon: 'fas fa-code', proficiency: 80, level: 'Advanced' },
      { name: 'C++', icon: 'fas fa-code', proficiency: 80, level: 'Advanced' },
      { name: 'JavaScript', icon: 'fab fa-js', proficiency: 85, level: 'Advanced' },
      { name: 'C#', icon: 'fas fa-code', proficiency: 75, level: 'Intermediate' },
      { name: 'PHP', icon: 'fab fa-php', proficiency: 75, level: 'Intermediate' },
      { name: 'Python', icon: 'fab fa-python', proficiency: 80, level: 'Advanced' },
      { name: 'HTML', icon: 'fab fa-html5', proficiency: 90, level: 'Advanced' },
      { name: 'CSS', icon: 'fab fa-css3-alt', proficiency: 85, level: 'Advanced' },
      { name: 'SQL', icon: 'fas fa-database', proficiency: 80, level: 'Advanced' },
      { name: 'React', icon: 'fab fa-react', proficiency: 85, level: 'Advanced' },
      { name: 'Node.js', icon: 'fab fa-node-js', proficiency: 80, level: 'Advanced' },
      { name: '.NET', icon: 'fab fa-microsoft', proficiency: 70, level: 'Intermediate' },
      { name: 'Firebase', icon: 'fas fa-fire', proficiency: 75, level: 'Intermediate' },
      { name: 'Next.js', icon: 'fas fa-code', proficiency: 70, level: 'Intermediate' },
      { name: 'Git', icon: 'fab fa-git-alt', proficiency: 85, level: 'Advanced' },
      { name: 'UI/UX Design', icon: 'fas fa-pencil-ruler', proficiency: 75, level: 'Intermediate' },
      { name: 'Arduino', icon: 'fas fa-microchip', proficiency: 70, level: 'Intermediate' },
      { name: 'AutoCAD', icon: 'fas fa-drafting-compass', proficiency: 65, level: 'Intermediate' }
    ];
    const projects = [
      {
        title: 'FurWell',
        shortDescription: 'Full-stack platform with React.js and Firebase',
        fullDescription: 'Developed as a Full Stack Developer and Logo Designer, responsible for both front-end and back-end development. Continuously improved the platform to meet user needs and contributed to branding strategy by designing the logo.',
        imageUrl: new URL('@/assets/furwell_logo.png', import.meta.url).href, 
        technologies: ['React.js', 'Firebase', 'Node.js'],
        features: [
          'Full-stack development (front-end & back-end)',
          'Logo design and branding contribution',
          'Feature implementation and platform optimization'
        ],
        demoUrl: 'https://furwell.vercel.app', // Add if available
        githubUrl: '' // Add if available
      },
      {
        title: 'SwiftSail Ferries',
        shortDescription: 'Website development with UI/UX design',
        fullDescription: 'Developed the Swiftsail Ferries website as a Full Stack Developer and Logo & UI/UX Designer. Oversaw both front-end and back-end tasks and designed the software logo to establish brand identity.',
        imageUrl: new URL('@/assets/swift-sail.png', import.meta.url).href,
        technologies: ['React.js', 'CSS', 'Firebase'],
        features: [
          'Full-stack development',
          'Logo and UI/UX design',
          'Brand identity establishment'
        ],
        demoUrl: 'https://swiftsail-ferries.vercel.app', // Add if available
        githubUrl: '' // Add if available
      },
      {
        title: 'TeknoSpace',
        shortDescription: 'Frontend-focused platform with responsive design',
        fullDescription: 'Developed and maintained the TeknoSpace platform as a Full Stack Developer with a focus on frontend and UI/UX design. Implemented responsive designs for cross-platform compatibility and collaborated on backend development using PHP.',
        imageUrl: new URL('@/assets/teknospace.png', import.meta.url).href,
        technologies: ['HTML', 'JavaScript', 'CSS', 'PHP'],
        features: [
          'Frontend and UI/UX development',
          'Responsive design implementation',
          'Backend collaboration and API integration'
        ],
        demoUrl: 'http://teknospace.onlinewebshop.net/', // Add if available
        githubUrl: '' // Add if available
      },
      {
        title: 'PrintHub',
        shortDescription: 'Full-stack project with C# and .NET',
        fullDescription: 'Owned and developed PrintHub as a Full Stack Developer, leading all aspects of development including front-end and back-end architecture, API integration, and database design. Managed the project lifecycle from planning to deployment and maintenance.',
        imageUrl: new URL('@/assets/printhub.png', import.meta.url).href,
        technologies: ['C#', '.NET', 'MS Access'],
        features: [
          'End-to-end project ownership',
          'API integration and database design',
          'Project deployment and maintenance'
        ],
        demoUrl: '', // Add if available
        githubUrl: '' // Add if available
      }
    ];


    const openProjectModal = (project) => {
      selectedProject.value = project;
      document.body.style.overflow = 'hidden';
    };

    const closeProjectModal = () => {
      selectedProject.value = null;
      document.body.style.overflow = 'auto';
    };

    const submitForm = () => {
      alert(`Thank you ${contactForm.value.name}! Your message has been sent.`);
      contactForm.value = { name: '', email: '', message: '' };
    };

    const handleAnchorClick = (e) => {
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
      }
    };

    onMounted(() => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleAnchorClick);
      });
    });

    onBeforeUnmount(() => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    });

    return {
      mobileMenuOpen,
      selectedProject,
      contactForm,
      currentYear,
      lastUpdated,
      education,
      organizations,
      skills,
      projects,
      openProjectModal,
      closeProjectModal,
      submitForm
    };
  }
};
