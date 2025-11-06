// EcoNexus Roadmap Application
// Complete data structure embedded in JavaScript

const roadmapData = {
  checkpoints: [
    {
      id: 'start',
      title: 'PROJECT START',
      phase: 'Foundation',
      icon: '🚀',
      description: 'Initial project setup and planning phase',
      complexity: 'Low',
      features: {
        planning: [
          { name: 'Define Project Scope', layer: 'frontend', tech: ['Documentation'] },
          { name: 'Team Formation', layer: 'backend', tech: ['Organization'] },
          { name: 'Technology Stack Selection', layer: 'backend', tech: ['Architecture'] },
          { name: 'Initial Roadmap', layer: 'frontend', tech: ['Planning'] }
        ]
      }
    },
    {
      id: 'checkpoint1',
      title: 'MVP CORE',
      phase: 'Foundation Layer',
      icon: '🔧',
      description: 'Build the core MVP with essential features for impact tracking',
      complexity: 'Medium',
      features: {
        frontend: [
          { name: 'User Dashboard', layer: 'frontend', tech: ['React', 'CSS'] },
          { name: 'Impact Tracking UI', layer: 'frontend', tech: ['React', 'Charts.js'] },
          { name: 'Profile Management', layer: 'frontend', tech: ['React', 'Forms'] },
          { name: 'Responsive Design', layer: 'frontend', tech: ['CSS', 'Mobile'] },
          { name: 'Basic Navigation', layer: 'frontend', tech: ['React Router'] }
        ],
        backend: [
          { name: 'User Authentication', layer: 'backend', tech: ['Node.js', 'JWT'] },
          { name: 'Database Setup', layer: 'backend', tech: ['MongoDB', 'PostgreSQL'] },
          { name: 'API Foundation', layer: 'backend', tech: ['Express', 'REST'] },
          { name: 'Data Models', layer: 'backend', tech: ['Mongoose', 'Schema'] },
          { name: 'Security Layer', layer: 'backend', tech: ['OAuth', 'Encryption'] }
        ],
        impact_tracking: [
          { name: 'Carbon Footprint Calculator', layer: 'ai', tech: ['Python', 'ML'] },
          { name: 'Activity Logging', layer: 'backend', tech: ['Database', 'APIs'] },
          { name: 'Basic Analytics', layer: 'frontend', tech: ['Charts', 'Visualization'] },
          { name: 'Impact Metrics', layer: 'ai', tech: ['Algorithms'] },
          { name: 'Progress Tracking', layer: 'frontend', tech: ['React', 'State'] }
        ]
      }
    },
    {
      id: 'checkpoint2',
      title: 'ENHANCED FEATURES',
      phase: 'Smart Layer',
      icon: '✨',
      description: 'Add advanced analytics, educational content, and location-based features',
      complexity: 'Medium-High',
      features: {
        analytics: [
          { name: 'Advanced Dashboards', layer: 'frontend', tech: ['D3.js', 'React'] },
          { name: 'Predictive Analytics', layer: 'ai', tech: ['ML', 'Python'] },
          { name: 'Data Visualization', layer: 'frontend', tech: ['Charts', 'Graphs'] },
          { name: 'Export Reports', layer: 'backend', tech: ['PDF', 'CSV'] },
          { name: 'Real-time Metrics', layer: 'backend', tech: ['WebSocket', 'Streaming'] },
          { name: 'Comparative Analysis', layer: 'ai', tech: ['Statistics'] },
          { name: 'Trend Detection', layer: 'ai', tech: ['ML', 'Algorithms'] }
        ],
        education: [
          { name: 'Content Management', layer: 'backend', tech: ['CMS', 'Database'] },
          { name: 'Interactive Tutorials', layer: 'frontend', tech: ['React', 'Animation'] },
          { name: 'Video Integration', layer: 'frontend', tech: ['Video.js', 'Streaming'] },
          { name: 'Quiz System', layer: 'frontend', tech: ['React', 'State'] },
          { name: 'Learning Paths', layer: 'backend', tech: ['Algorithm', 'Database'] },
          { name: 'Resource Library', layer: 'backend', tech: ['Storage', 'CDN'] }
        ],
        geolocation: [
          { name: 'Location Services', layer: 'maps', tech: ['Google Maps API'] },
          { name: 'Local Events', layer: 'backend', tech: ['Database', 'Geospatial'] },
          { name: 'Nearby Activities', layer: 'maps', tech: ['Geolocation', 'API'] },
          { name: 'Regional Data', layer: 'backend', tech: ['Database', 'Analytics'] },
          { name: 'Map Visualization', layer: 'maps', tech: ['Leaflet', 'Mapbox'] },
          { name: 'Location-based Recommendations', layer: 'ai', tech: ['ML', 'Geospatial'] },
          { name: 'Distance Tracking', layer: 'maps', tech: ['GPS', 'Algorithms'] }
        ]
      }
    },
    {
      id: 'checkpoint3',
      title: 'COMMUNITY & AI',
      phase: 'Intelligence Layer',
      icon: '🧠',
      description: 'Implement AI-powered features, community building, and gamification',
      complexity: 'High',
      features: {
        ai: [
          { name: 'Recommendation Engine', layer: 'ai', tech: ['ML', 'Python', 'TensorFlow'] },
          { name: 'Natural Language Processing', layer: 'ai', tech: ['NLP', 'BERT'] },
          { name: 'Image Recognition', layer: 'ai', tech: ['Computer Vision', 'CNN'] },
          { name: 'Personalization Algorithm', layer: 'ai', tech: ['ML', 'Collaborative Filtering'] },
          { name: 'Smart Suggestions', layer: 'ai', tech: ['ML', 'Ranking'] },
          { name: 'Predictive Modeling', layer: 'ai', tech: ['ML', 'Time Series'] },
          { name: 'Chatbot Integration', layer: 'ai', tech: ['NLP', 'Dialog Systems'] },
          { name: 'Anomaly Detection', layer: 'ai', tech: ['ML', 'Statistics'] }
        ],
        community: [
          { name: 'Social Feed', layer: 'social', tech: ['React', 'WebSocket'] },
          { name: 'User Groups', layer: 'social', tech: ['Database', 'Backend'] },
          { name: 'Discussion Forums', layer: 'social', tech: ['React', 'Database'] },
          { name: 'Event Organization', layer: 'social', tech: ['Calendar', 'Backend'] },
          { name: 'Team Challenges', layer: 'social', tech: ['Gamification', 'Backend'] },
          { name: 'Messaging System', layer: 'social', tech: ['WebSocket', 'Real-time'] },
          { name: 'User Profiles', layer: 'social', tech: ['React', 'Database'] },
          { name: 'Follow System', layer: 'social', tech: ['Graph DB', 'Backend'] }
        ],
        gamification: [
          { name: 'Achievement System', layer: 'backend', tech: ['Database', 'Logic'] },
          { name: 'Points & Rewards', layer: 'backend', tech: ['Algorithm', 'Database'] },
          { name: 'Badges & Trophies', layer: 'frontend', tech: ['React', 'Animation'] },
          { name: 'Leaderboards', layer: 'frontend', tech: ['React', 'Real-time'] },
          { name: 'Daily Challenges', layer: 'backend', tech: ['Scheduler', 'Algorithm'] },
          { name: 'Streaks Tracking', layer: 'backend', tech: ['Database', 'Logic'] },
          { name: 'Level System', layer: 'backend', tech: ['Algorithm', 'Database'] },
          { name: 'Virtual Rewards', layer: 'frontend', tech: ['React', 'Animation'] },
          { name: 'Progress Milestones', layer: 'frontend', tech: ['React', 'Visualization'] }
        ]
      }
    },
    {
      id: 'checkpoint4',
      title: 'SCALE & OPTIMIZATION',
      phase: 'Performance Layer',
      icon: '⚡',
      description: 'Optimize performance, add advanced mapping, and competitive features',
      complexity: 'High',
      features: {
        maps: [
          { name: 'Advanced Mapping Engine', layer: 'maps', tech: ['Mapbox', 'WebGL'] },
          { name: 'Heat Maps', layer: 'maps', tech: ['Data Visualization', 'Canvas'] },
          { name: 'Route Optimization', layer: 'maps', tech: ['Algorithm', 'Pathfinding'] },
          { name: 'Custom Map Layers', layer: 'maps', tech: ['GeoJSON', 'Tiles'] },
          { name: '3D Visualization', layer: 'maps', tech: ['Three.js', 'WebGL'] },
          { name: 'Satellite Imagery', layer: 'maps', tech: ['API', 'Imagery Services'] },
          { name: 'Indoor Mapping', layer: 'maps', tech: ['Custom Tiles', 'API'] }
        ],
        performance: [
          { name: 'Caching Strategy', layer: 'backend', tech: ['Redis', 'CDN'] },
          { name: 'Load Balancing', layer: 'backend', tech: ['Nginx', 'Cloud'] },
          { name: 'Database Optimization', layer: 'backend', tech: ['Indexing', 'Query Optimization'] },
          { name: 'Code Splitting', layer: 'frontend', tech: ['Webpack', 'Lazy Loading'] },
          { name: 'Image Optimization', layer: 'frontend', tech: ['WebP', 'CDN'] },
          { name: 'API Rate Limiting', layer: 'backend', tech: ['Middleware', 'Redis'] }
        ],
        leaderboards: [
          { name: 'Global Rankings', layer: 'backend', tech: ['Database', 'Algorithm'] },
          { name: 'Regional Leaderboards', layer: 'backend', tech: ['Geospatial', 'Database'] },
          { name: 'Category Rankings', layer: 'backend', tech: ['Database', 'Filtering'] },
          { name: 'Time-based Leaderboards', layer: 'backend', tech: ['Time Series', 'Database'] },
          { name: 'Real-time Updates', layer: 'social', tech: ['WebSocket', 'Streaming'] }
        ]
      }
    },
    {
      id: 'checkpoint5',
      title: 'ADVANCED INTEGRATIONS',
      phase: 'Ecosystem Layer',
      icon: '🔗',
      description: 'Integrate external data sources, verification systems, and notifications',
      complexity: 'High',
      features: {
        environmental_data: [
          { name: 'Weather Integration', layer: 'backend', tech: ['Weather API', 'Integration'] },
          { name: 'Air Quality Data', layer: 'backend', tech: ['Environmental API', 'Data'] },
          { name: 'Climate Data', layer: 'ai', tech: ['ML', 'Data Science'] },
          { name: 'Satellite Data', layer: 'maps', tech: ['Satellite API', 'Imagery'] },
          { name: 'Ocean Health Metrics', layer: 'backend', tech: ['API', 'Database'] },
          { name: 'Forest Cover Tracking', layer: 'maps', tech: ['GIS', 'Satellite'] }
        ],
        verification: [
          { name: 'Blockchain Verification', layer: 'backend', tech: ['Blockchain', 'Smart Contracts'] },
          { name: 'Photo Verification', layer: 'ai', tech: ['Computer Vision', 'ML'] },
          { name: 'Third-party Validation', layer: 'backend', tech: ['API', 'Integration'] },
          { name: 'Impact Certification', layer: 'backend', tech: ['Crypto', 'Certificates'] },
          { name: 'Audit Trail', layer: 'backend', tech: ['Database', 'Immutable Logs'] }
        ],
        notifications: [
          { name: 'Push Notifications', layer: 'backend', tech: ['Firebase', 'FCM'] },
          { name: 'Email System', layer: 'backend', tech: ['SendGrid', 'SMTP'] },
          { name: 'SMS Alerts', layer: 'backend', tech: ['Twilio', 'SMS API'] },
          { name: 'In-app Messaging', layer: 'frontend', tech: ['React', 'WebSocket'] },
          { name: 'Notification Preferences', layer: 'frontend', tech: ['React', 'Settings'] }
        ]
      }
    },
    {
      id: 'checkpoint6a',
      title: 'MARKET LEADERSHIP (B2B)',
      phase: 'Enterprise Path',
      icon: '🏢',
      description: 'Enterprise features for organizational clients and business integrations',
      complexity: 'Very High',
      features: {
        organizational: [
          { name: 'Corporate Dashboards', layer: 'frontend', tech: ['React', 'Advanced Charts'] },
          { name: 'Team Management', layer: 'backend', tech: ['RBAC', 'Database'] },
          { name: 'Reporting Suite', layer: 'backend', tech: ['Analytics', 'PDF Generation'] },
          { name: 'White-label Solution', layer: 'frontend', tech: ['Theming', 'Branding'] },
          { name: 'Multi-tenant Architecture', layer: 'backend', tech: ['Database', 'Isolation'] },
          { name: 'Compliance Tracking', layer: 'backend', tech: ['Audit', 'Reporting'] },
          { name: 'Custom Integrations', layer: 'backend', tech: ['API', 'Webhooks'] }
        ],
        b2b_integration: [
          { name: 'Enterprise SSO', layer: 'backend', tech: ['SAML', 'OAuth'] },
          { name: 'API Marketplace', layer: 'backend', tech: ['API Gateway', 'Documentation'] },
          { name: 'Data Export Tools', layer: 'backend', tech: ['ETL', 'Data Pipeline'] },
          { name: 'CRM Integration', layer: 'backend', tech: ['Salesforce', 'HubSpot'] },
          { name: 'ERP Connectivity', layer: 'backend', tech: ['SAP', 'Oracle'] },
          { name: 'BI Tools Integration', layer: 'backend', tech: ['Tableau', 'Power BI'] },
          { name: 'Slack/Teams Integration', layer: 'backend', tech: ['Bot API', 'Webhooks'] }
        ],
        scalability: [
          { name: 'Microservices Architecture', layer: 'backend', tech: ['Docker', 'Kubernetes'] },
          { name: 'Cloud Infrastructure', layer: 'backend', tech: ['AWS', 'Azure', 'GCP'] },
          { name: 'Auto-scaling', layer: 'backend', tech: ['Kubernetes', 'Cloud'] },
          { name: 'Distributed Database', layer: 'backend', tech: ['Cassandra', 'Sharding'] },
          { name: 'Message Queue', layer: 'backend', tech: ['RabbitMQ', 'Kafka'] },
          { name: 'Service Mesh', layer: 'backend', tech: ['Istio', 'Linkerd'] }
        ]
      }
    },
    {
      id: 'checkpoint6b',
      title: 'MARKET LEADERSHIP (B2C)',
      phase: 'Consumer Path',
      icon: '👥',
      description: 'Consumer-focused features including mobile apps and global expansion',
      complexity: 'Very High',
      features: {
        mobile_app: [
          { name: 'Native iOS App', layer: 'frontend', tech: ['Swift', 'SwiftUI'] },
          { name: 'Native Android App', layer: 'frontend', tech: ['Kotlin', 'Jetpack'] },
          { name: 'Offline Mode', layer: 'frontend', tech: ['Local Storage', 'Sync'] },
          { name: 'Mobile Push', layer: 'backend', tech: ['FCM', 'APNS'] },
          { name: 'App Store Optimization', layer: 'frontend', tech: ['Marketing', 'ASO'] },
          { name: 'Mobile Analytics', layer: 'backend', tech: ['Firebase', 'Analytics'] }
        ],
        global_expansion: [
          { name: 'Multi-language Support', layer: 'frontend', tech: ['i18n', 'Localization'] },
          { name: 'Currency Conversion', layer: 'backend', tech: ['Exchange API', 'Database'] },
          { name: 'Regional Content', layer: 'backend', tech: ['CMS', 'Geolocation'] },
          { name: 'Local Payment Methods', layer: 'backend', tech: ['Stripe', 'PayPal'] },
          { name: 'Time Zone Management', layer: 'backend', tech: ['Moment.js', 'Server'] },
          { name: 'Cultural Customization', layer: 'frontend', tech: ['Theming', 'Content'] }
        ],
        social_features: [
          { name: 'Social Media Integration', layer: 'social', tech: ['API', 'OAuth'] },
          { name: 'Share Functionality', layer: 'frontend', tech: ['Web Share API'] },
          { name: 'Influencer Program', layer: 'backend', tech: ['Database', 'Logic'] },
          { name: 'User-generated Content', layer: 'social', tech: ['React', 'Moderation'] },
          { name: 'Live Streaming', layer: 'social', tech: ['WebRTC', 'Streaming'] },
          { name: 'Social Analytics', layer: 'ai', tech: ['ML', 'Analytics'] }
        ]
      }
    },
    {
      id: 'continuous',
      title: 'CONTINUOUS IMPROVEMENT',
      phase: 'Ongoing Evolution',
      icon: '♻️',
      description: 'Ongoing improvements, monitoring, and feature enhancements',
      complexity: 'Ongoing',
      features: {
        ongoing: [
          { name: 'User Feedback Loop', layer: 'backend', tech: ['Surveys', 'Analytics'] },
          { name: 'A/B Testing', layer: 'frontend', tech: ['Optimization', 'Testing'] },
          { name: 'Performance Monitoring', layer: 'backend', tech: ['DataDog', 'NewRelic'] },
          { name: 'Security Audits', layer: 'backend', tech: ['Penetration Testing', 'Audit'] },
          { name: 'Feature Flags', layer: 'backend', tech: ['LaunchDarkly', 'Config'] },
          { name: 'Regular Updates', layer: 'frontend', tech: ['CI/CD', 'Deployment'] },
          { name: 'Technical Debt Management', layer: 'backend', tech: ['Refactoring', 'Code Quality'] },
          { name: 'Innovation Lab', layer: 'ai', tech: ['R&D', 'Experimentation'] }
        ]
      }
    }
  ]
};

// State management
let currentView = 'horizontal';
let expandedCheckpoints = new Set();
let currentZoom = 1;
let currentCheckpointIndex = 0;

// Initialize application
function init() {
  console.log('🌱 Initializing EcoNexus Roadmap...');
  renderRoadmap();
  updateStats();
  attachEventListeners();
  console.log('✅ Application initialized successfully');
}

// Render the complete roadmap
function renderRoadmap() {
  const container = document.getElementById('roadmapContainer');
  container.innerHTML = '';

  roadmapData.checkpoints.forEach((checkpoint, index) => {
    // Create checkpoint wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'checkpoint-wrapper';
    wrapper.dataset.checkpointId = checkpoint.id;

    // Create checkpoint node
    const node = createCheckpointNode(checkpoint, index);
    wrapper.appendChild(node);

    // Add to container
    container.appendChild(wrapper);

    // Add arrow connector between checkpoints (except for last one)
    if (index < roadmapData.checkpoints.length - 1) {
      const arrow = createArrowConnector();
      container.appendChild(arrow);
    }
  });
}

// Create checkpoint node
function createCheckpointNode(checkpoint, index) {
  const node = document.createElement('div');
  node.className = 'checkpoint-node';
  node.dataset.checkpointId = checkpoint.id;
  node.dataset.index = index;

  const featureCount = calculateFeatureCount(checkpoint);

  node.innerHTML = `
    <div class="checkpoint-icon">${checkpoint.icon}</div>
    <div class="checkpoint-number">Checkpoint ${index === 0 ? 'Start' : index}</div>
    <div class="checkpoint-title">${checkpoint.title}</div>
    <div class="checkpoint-phase">${checkpoint.phase}</div>
    <div class="checkpoint-count">${featureCount} ${featureCount === 1 ? 'item' : 'features'}</div>
  `;

  // Add expand button if checkpoint has features
  if (checkpoint.features && Object.keys(checkpoint.features).length > 0) {
    const expandBtn = document.createElement('button');
    expandBtn.className = 'expand-btn';
    expandBtn.innerHTML = '+';
    expandBtn.setAttribute('aria-label', 'Expand features');
    expandBtn.onclick = (e) => {
      e.stopPropagation();
      toggleCheckpointExpansion(checkpoint.id);
    };
    node.appendChild(expandBtn);
  }

  // Click to open detail panel
  node.onclick = () => openDetailPanel(checkpoint);

  return node;
}

// Calculate feature count
function calculateFeatureCount(checkpoint) {
  if (!checkpoint.features) return 0;
  let count = 0;
  Object.values(checkpoint.features).forEach(category => {
    count += category.length;
  });
  return count;
}

// Create arrow connector
function createArrowConnector() {
  const arrow = document.createElement('div');
  arrow.className = 'arrow-connector';
  arrow.innerHTML = `
    <svg viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:var(--color-primary);stop-opacity:0.5" />
          <stop offset="100%" style="stop-color:var(--color-primary);stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M 5 22.5 L 45 22.5 L 40 15 M 45 22.5 L 40 30" 
            stroke="url(#arrowGradient)" 
            stroke-width="3" 
            fill="none" 
            stroke-linecap="round" 
            stroke-linejoin="round"/>
    </svg>
  `;
  return arrow;
}

// Toggle checkpoint expansion with CRITICAL FIX
function toggleCheckpointExpansion(checkpointId) {
  console.log(`🔧 Toggling expansion for: ${checkpointId}`);
  
  const wrapper = document.querySelector(`.checkpoint-wrapper[data-checkpoint-id="${checkpointId}"]`);
  if (!wrapper) {
    console.error(`❌ Wrapper not found for ${checkpointId}`);
    return;
  }

  const existingCards = wrapper.querySelector('.feature-cards');
  const expandBtn = wrapper.querySelector('.expand-btn');

  if (existingCards) {
    // Collapse
    console.log(`📁 Collapsing ${checkpointId}`);
    existingCards.style.animation = 'slideDown 300ms var(--ease-standard) reverse';
    setTimeout(() => {
      if (existingCards && existingCards.parentNode) {
        existingCards.parentNode.removeChild(existingCards);
      }
    }, 300);
    expandedCheckpoints.delete(checkpointId);
    if (expandBtn) expandBtn.innerHTML = '+';
  } else {
    // Expand
    console.log(`📂 Expanding ${checkpointId}`);
    const checkpoint = roadmapData.checkpoints.find(cp => cp.id === checkpointId);
    if (checkpoint && checkpoint.features) {
      const cards = createFeatureCards(checkpoint);
      wrapper.appendChild(cards);
      expandedCheckpoints.add(checkpointId);
      if (expandBtn) expandBtn.innerHTML = '−';
    }
  }
}

// Create feature cards
function createFeatureCards(checkpoint) {
  const cards = document.createElement('div');
  cards.className = 'feature-cards';

  const features = checkpoint.features;
  const technologies = new Set();

  // Create sections for each category
  Object.entries(features).forEach(([category, items]) => {
    const section = document.createElement('div');
    section.className = 'feature-section';

    const title = document.createElement('h3');
    title.className = 'feature-section-title';
    title.textContent = category.replace(/_/g, ' ').toUpperCase();
    section.appendChild(title);

    const list = document.createElement('ul');
    list.className = 'feature-list';

    items.forEach(item => {
      const li = document.createElement('li');
      li.className = 'feature-item';
      li.textContent = item.name;

      // Add layer badge
      if (item.layer) {
        const badge = document.createElement('span');
        badge.className = `layer-badge ${item.layer}`;
        badge.textContent = item.layer;
        li.appendChild(badge);
      }

      // Collect technologies
      if (item.tech) {
        item.tech.forEach(tech => technologies.add(tech));
      }

      list.appendChild(li);
    });

    section.appendChild(list);
    cards.appendChild(section);
  });

  // Add technology badges
  if (technologies.size > 0) {
    const techSection = document.createElement('div');
    techSection.className = 'tech-badges';

    Array.from(technologies).forEach(tech => {
      const badge = document.createElement('span');
      badge.className = 'tech-badge';
      badge.textContent = tech;
      techSection.appendChild(badge);
    });

    cards.appendChild(techSection);
  }

  return cards;
}

// Expand all checkpoints with CRITICAL FIX
function expandAll() {
  console.log('📂 Expanding all checkpoints...');
  roadmapData.checkpoints.forEach(checkpoint => {
    if (checkpoint.features && Object.keys(checkpoint.features).length > 0) {
      const wrapper = document.querySelector(`.checkpoint-wrapper[data-checkpoint-id="${checkpoint.id}"]`);
      if (!wrapper) return;

      // CRITICAL: Check if already expanded
      const existingCards = wrapper.querySelector('.feature-cards');
      if (existingCards) {
        console.log(`⚠️ ${checkpoint.id} already expanded, skipping`);
        return;
      }

      // Create and add cards
      const cards = createFeatureCards(checkpoint);
      wrapper.appendChild(cards);
      expandedCheckpoints.add(checkpoint.id);

      // Update button
      const expandBtn = wrapper.querySelector('.expand-btn');
      if (expandBtn) expandBtn.innerHTML = '−';
      
      console.log(`✅ Expanded ${checkpoint.id}`);
    }
  });
}

// Collapse all checkpoints with CRITICAL FIX
function collapseAll() {
  console.log('📁 Collapsing all checkpoints...');
  
  const allCards = document.querySelectorAll('.feature-cards');
  allCards.forEach(cards => {
    cards.style.animation = 'slideDown 300ms var(--ease-standard) reverse';
  });

  setTimeout(() => {
    allCards.forEach(cards => {
      if (cards && cards.parentNode) {
        cards.parentNode.removeChild(cards);
      }
    });
    
    // Update all expand buttons
    document.querySelectorAll('.expand-btn').forEach(btn => {
      btn.innerHTML = '+';
    });
    
    expandedCheckpoints.clear();
    console.log('✅ All checkpoints collapsed');
  }, 300);
}

// Open detail panel
function openDetailPanel(checkpoint) {
  const overlay = document.getElementById('detailOverlay');
  const content = document.getElementById('detailContent');

  let html = `
    <div class="detail-header">
      <div class="detail-icon">${checkpoint.icon}</div>
      <h2 class="detail-title">${checkpoint.title}</h2>
      <div class="detail-phase">${checkpoint.phase}</div>
      <p class="detail-description">${checkpoint.description}</p>
      <p><strong>Complexity:</strong> ${checkpoint.complexity}</p>
    </div>
  `;

  if (checkpoint.features) {
    html += '<div class="detail-features">';
    Object.entries(checkpoint.features).forEach(([category, items]) => {
      html += `
        <div class="detail-section">
          <h3 class="detail-section-title">${category.replace(/_/g, ' ')}</h3>
          <ul class="detail-feature-list">
      `;
      items.forEach(item => {
        html += `<li class="detail-feature-item">${item.name}</li>`;
      });
      html += '</ul></div>';
    });
    html += '</div>';
  }

  content.innerHTML = html;
  overlay.classList.add('active');
}

// Close detail panel
function closeDetailPanel() {
  const overlay = document.getElementById('detailOverlay');
  overlay.classList.remove('active');
}

// Switch view mode
function switchView(view) {
  currentView = view;
  const container = document.getElementById('roadmapContainer');
  container.className = `roadmap-container ${view}`;

  // Update button states
  document.querySelectorAll('.btn-view').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });
}

// Navigate to checkpoint
function navigateToCheckpoint(direction) {
  const maxIndex = roadmapData.checkpoints.length - 1;
  
  if (direction === 'prev') {
    currentCheckpointIndex = Math.max(0, currentCheckpointIndex - 1);
  } else {
    currentCheckpointIndex = Math.min(maxIndex, currentCheckpointIndex + 1);
  }

  const wrapper = document.querySelector(`.checkpoint-wrapper[data-checkpoint-id="${roadmapData.checkpoints[currentCheckpointIndex].id}"]`);
  if (wrapper) {
    wrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Zoom control
function adjustZoom(direction) {
  const container = document.getElementById('roadmapContainer');
  const step = 0.1;
  
  if (direction === 'in') {
    currentZoom = Math.min(1.5, currentZoom + step);
  } else {
    currentZoom = Math.max(0.5, currentZoom - step);
  }
  
  container.style.transform = `scale(${currentZoom})`;
}

// Update stats
function updateStats() {
  const totalCheckpoints = roadmapData.checkpoints.length;
  let totalFeatures = 0;
  
  roadmapData.checkpoints.forEach(checkpoint => {
    totalFeatures += calculateFeatureCount(checkpoint);
  });

  document.getElementById('totalCheckpoints').textContent = totalCheckpoints;
  document.getElementById('totalFeatures').textContent = totalFeatures;
}

// Attach event listeners
function attachEventListeners() {
  // View toggle
  document.getElementById('horizontalViewBtn').addEventListener('click', () => switchView('horizontal'));
  document.getElementById('verticalViewBtn').addEventListener('click', () => switchView('vertical'));

  // Expand/Collapse
  document.getElementById('expandAllBtn').addEventListener('click', expandAll);
  document.getElementById('collapseAllBtn').addEventListener('click', collapseAll);

  // Navigation
  document.getElementById('prevBtn').addEventListener('click', () => navigateToCheckpoint('prev'));
  document.getElementById('nextBtn').addEventListener('click', () => navigateToCheckpoint('next'));

  // Zoom
  document.getElementById('zoomInBtn').addEventListener('click', () => adjustZoom('in'));
  document.getElementById('zoomOutBtn').addEventListener('click', () => adjustZoom('out'));

  // Detail panel
  document.getElementById('closeDetailBtn').addEventListener('click', closeDetailPanel);
  document.getElementById('detailOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'detailOverlay') {
      closeDetailPanel();
    }
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDetailPanel();
    }
  });
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}