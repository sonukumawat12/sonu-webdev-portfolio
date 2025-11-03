import sonuImage from '../assets/sonu.jpg';
import housejetImage from '../assets/project/housejet.png';
import clinicDashboard from '../assets/project/clinic/Dashboard.png';
import clinicLogin from '../assets/project/clinic/login.png';
import clinicPatientList from '../assets/project/clinic/Patientlist.png';
import clinicPrescriptionDetails from '../assets/project/clinic/prescription_details.png';
import clinicRole from '../assets/project/clinic/role.png';
import clinicUsers from '../assets/project/clinic/users.png';
import clinicThumb from '../assets/project/clinic/thum-clinic.jpg';

// MyClientWave images
import clientwaveDashboard from '../assets/project/clientwave/Dashboard.jpeg';
import clientwaveCertificate from '../assets/project/clientwave/certificate of signature.png';
import clientwaveConfig from '../assets/project/clientwave/config-signature-feilds.jpeg';
import clientwaveDocIndex from '../assets/project/clientwave/doc-index.jpeg';
import clientwaveLeadPage from '../assets/project/clientwave/lead-page.jpeg';

// Payroll Management System images
import payrollDashboard from '../assets/project/payroll/Dashboard.jpeg';
import payrollLogin from '../assets/project/payroll/login.jpeg';
import payrollCreateEmp from '../assets/project/payroll/create-emp.jpeg';
import payrollCreatePayroll from '../assets/project/payroll/create-payroll.jpeg';
import payrollAdvance from '../assets/project/payroll/advance.jpeg';
import payrollGatepass from '../assets/project/payroll/gatepass.jpeg';

export const portfolioData = {
  personal: {
    name: "Sonu Kumawat",
    title: "Full-Stack Web Developer",
    tagline: "Transforming ideas into powerful digital solutions with cutting-edge technologies",
    bio: "Passionate full-stack developer with 5+ years of experience crafting innovative web solutions. I specialize in Laravel, Vue.js, and React, with a proven track record of delivering 17+ successful projects for diverse clients. My expertise spans from building comprehensive CRM systems to healthcare management platforms, always focusing on clean code, user experience, and scalable architecture.",
    email: "sonukumawat6282@gmail.com",
    phone: "+91 63754 26292",
    location: "Jaipur, India",
    image: sonuImage,
    availableForWork: true,
    highlights: [
      {
        icon: "🎓",
        title: "Computer Science Graduate",
        description: "Strong foundation in software engineering principles and algorithms",
        color: "from-blue-400 to-cyan-400"
      },
      {
        icon: "🏆",
        title: "Award-winning Developer",
        description: "Recognized for excellence in web development and innovation",
        color: "from-yellow-400 to-orange-400"
      },
      {
        icon: "🌟",
        title: "Open Source Contributor",
        description: "Active contributor to open-source projects and community initiatives",
        color: "from-purple-400 to-pink-400"
      },
      {
        icon: "🚀",
        title: "Innovation Focused",
        description: "Always exploring cutting-edge technologies and best practices",
        color: "from-green-400 to-emerald-400"
      }
    ],
    philosophy: "I believe in writing clean, maintainable code that not only solves problems but also creates delightful user experiences. Every project is an opportunity to learn, innovate, and make a positive impact.",
  },

  stats: [
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Projects Completed", value: 17, suffix: "+" },
    { label: "Happy Clients", value: 13, suffix: "+" },
    { label: "Technologies Mastered", value: 15, suffix: "+" },
  ],

  skills: {
    frontend: [
      { name: "React", level: 90, icon: "⚛️", color: "from-cyan-400 to-blue-500" },
      { name: "Vue.js", level: 88, icon: "💚", color: "from-green-400 to-emerald-500" },
      { name: "TypeScript", level: 85, icon: "🔷", color: "from-blue-400 to-indigo-500" },
      { name: "Tailwind CSS", level: 88, icon: "🎯", color: "from-teal-400 to-cyan-500" },
    ],
    backend: [
      { name: "Laravel", level: 92, icon: "🐘", color: "from-red-400 to-pink-500" },
      { name: "Node.js", level: 82, icon: "🟢", color: "from-green-400 to-teal-500" },
      { name: "REST APIs", level: 90, icon: "🔗", color: "from-blue-400 to-purple-500" },
    ],
    database: [
      { name: "MySQL", level: 88, icon: "🐬", color: "from-blue-400 to-cyan-500" },
      { name: "MariaDB", level: 85, icon: "🍃", color: "from-green-400 to-blue-500" },
    ],
    tools: [
      { name: "Git", level: 90, icon: "📚", color: "from-orange-400 to-red-500" },
      { name: "Postman", level: 85, icon: "📮", color: "from-orange-400 to-pink-500" },
      { name: "Docker", level: 75, icon: "🐳", color: "from-blue-400 to-cyan-500" },
    ],
  },

  projects: [
    {
      id: 1,
      title: "Payroll Management System",
      description: "Comprehensive payroll and employee management solution",
      longDescription: "A robust payroll management system designed to streamline HR processes including employee management, payroll processing, advance salary tracking, and gatepass management. The system features role-based access control, automated salary calculations, tax deductions, and comprehensive reporting capabilities.",
      image: payrollDashboard,
      gallery: [
        {
          id: 1,
          title: "Dashboard Overview",
          description: "Main dashboard with key metrics and quick access to payroll features",
          image: payrollDashboard
        },
        {
          id: 2,
          title: "Login Screen",
          description: "Secure authentication with role-based access control",
          image: payrollLogin
        },
        {
          id: 3,
          title: "Employee Management",
          description: "Create and manage employee profiles and details",
          image: payrollCreateEmp
        },
        {
          id: 4,
          title: "Payroll Processing",
          description: "Generate and manage employee payroll with automated calculations",
          image: payrollCreatePayroll
        },
        {
          id: 5,
          title: "Advance Management",
          description: "Track and manage employee advance salary requests",
          image: payrollAdvance
        },
        {
          id: 6,
          title: "Gatepass System",
          description: "Manage employee gatepass entries and exits",
          image: payrollGatepass
        }
      ],
      tech: ["Laravel", "React", "MySQL", "REST API", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "HouseJet - Real-Estate CRM",
      description: "Comprehensive CRM system for real estate management",
      longDescription: "A full-featured Customer Relationship Management system designed specifically for real estate businesses. Built with Laravel, Vue.js, and MariaDB. Features include lead management, property listings, client tracking, appointment scheduling, and comprehensive reporting dashboard.",
      image: housejetImage,
      gallery: [
        {
          id: 1,
          title: "Dashboard Overview",
          description: "Main dashboard with key metrics and analytics",
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 2,
          title: "Lead Management",
          description: "Comprehensive lead tracking and management system",
          image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 3,
          title: "Property Listings",
          description: "Property catalog with advanced search and filtering",
          image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 4,
          title: "Appointment Scheduling",
          description: "Calendar-based appointment booking system",
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 5,
          title: "Client Portal",
          description: "Dedicated client dashboard and communication hub",
          image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 6,
          title: "Reports & Analytics",
          description: "Comprehensive reporting and data visualization",
          image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
      tech: ["CakePHP", "Vue.js", "MariaDB", "PHP" ],
      liveUrl: "https://housejet.com/",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "MyClientWave - Lead Management System",
      description: "Advanced lead management with CRM integrations",
      longDescription: "A comprehensive lead management platform with role-based access control and seamless integrations with Zoho, Monday.com, and Salesforce CRM. Features include lead tracking, workflow automation, data synchronization, and advanced analytics dashboard.",
      image: clientwaveDashboard,
      gallery: [
        {
          id: 1,
          title: "Main Dashboard",
          description: "Centralized lead management dashboard with key metrics and analytics",
          image: clientwaveDashboard
        },
        {
          id: 2,
          title: "Lead Management Page",
          description: "Comprehensive lead tracking and management interface",
          image: clientwaveLeadPage
        },
        {
          id: 3,
          title: "Document Index",
          description: "Document management and indexing system",
          image: clientwaveDocIndex
        },
        {
          id: 4,
          title: "Signature Configuration",
          description: "Digital signature field configuration and setup",
          image: clientwaveConfig
        },
        {
          id: 5,
          title: "Certificate Management",
          description: "Digital certificate and signature verification system",
          image: clientwaveCertificate
        }
      ],
      tech: ["Laravel", "Bootstrap", "MySQL", "API Integration"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Clinic Management CRM",
      description: "Healthcare management system for clinics and hospitals",
      longDescription: "A specialized CRM system designed for healthcare facilities. Features include patient management, appointment scheduling, medical records, billing management, inventory tracking, and comprehensive reporting for healthcare providers.",
      image: clinicThumb,
      gallery: [
        {
          id: 1,
          title: "Dashboard Overview",
          description: "Main clinic dashboard with key metrics and patient overview",
          image: clinicDashboard
        },
        {
          id: 2,
          title: "User Authentication",
          description: "Secure login system with role-based access control",
          image: clinicLogin
        },
        {
          id: 3,
          title: "Patient Management",
          description: "Comprehensive patient list and management interface",
          image: clinicPatientList
        },
        {
          id: 4,
          title: "Prescription Details",
          description: "Detailed prescription management and tracking system",
          image: clinicPrescriptionDetails
        },
        {
          id: 5,
          title: "Role Management",
          description: "User role and permission management system",
          image: clinicRole
        },
        {
          id: 6,
          title: "User Management",
          description: "Staff and user account management interface",
          image: clinicUsers
        }
      ],
      tech: ["Laravel", "Bootstrap", "MySQL", "PHP"],
      liveUrl: "#",
      githubUrl: "https://github.com/sonukumawat12/clinic-management-crm",
    }
  ],

  experience: [
    {
      id: 1,
      title: "Full-stack Developer",
      company: "Brahmastack Technologies",
      duration: "August 2024 - Present",
      description: "Leading full-stack development initiatives using Laravel, CakePHP, MariaDB, and Vue.js. Architecting scalable web applications with modern development practices, implementing robust APIs, and delivering high-performance solutions for enterprise clients.",
      icon: "💼",
    },
    {
      id: 2,
      title: "Laravel Developer",
      company: "WebNStack IT Solution Pvt Ltd",
      duration: "January 2022 - July 2024",
      description: "Engineered comprehensive healthcare management systems, HR-Payroll solutions, and CRM applications featuring patient database management, employee payroll processing, intelligent appointment scheduling, and multi-level role-based access control. Successfully deployed HIPAA-compliant solutions serving 200+ patients daily and streamlined HR operations for multiple organizations.",
      icon: "🏥",
    },
    {
      id: 3,
      title: "Laravel Developer",
      company: "Aladdin Digital Solutions",
      duration: "August 2019 - December 2021",
      description: "Developed and maintained multiple web applications using Laravel framework including ecommerce platforms and Zupito CRM - an online cab booking system. Gained extensive experience with live production projects, contributed to critical web development initiatives, mastered industry-standard workflows, and established strong foundation in modern development practices.",
      icon: "🚀",
    },
  ],

  certifications: [
    {
      id: 1,
      title: "PHP & React.js Training",
      issuer: "Rajasthan Knowledge Corporation Limited",
      year: "2018",
      icon: "🏛️",
      description: "Government-sponsored training program in PHP and React.js development",
    },
    {
      id: 2,
      title: "Full Stack Development Training",
      issuer: "Ezulix Software Pvt. Ltd.",
      year: "2018",
      icon: "💼",
      description: "6-month comprehensive full-stack development training program",
    },
 
  ],

  social: [
    { name: "GitHub", url: "https://github.com", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
    { name: "Email", url: "mailto:sonukumawat6282@gmail.com", icon: "Mail" },
  ],
};