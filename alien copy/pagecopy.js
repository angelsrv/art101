// JavaScript for the alien builder page
// event listeners for website and builder
document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start-button');
  const builderPanel = document.getElementById('builder-panel');
  const introPanel = document.getElementById('intro-panel');

  const bodyEl = document.getElementById('alien-body');
  const headEl = document.getElementById('alien-head');
  const featuresEl = document.getElementById('alien-features');
  const bodyImg = document.getElementById('alien-body-img');
  const headImg = document.getElementById('alien-head-img');
  const featuresImg = document.getElementById('alien-features-img');
  const bodyLabel = document.getElementById('body-label');
  const headLabel = document.getElementById('head-label');
  const featuresLabel = document.getElementById('features-label');

  // array for features, the state variable chooses which of these are selected
  const variants = {
    body: [
      { label: 'body1', className: 'body-0', src: 'images/body-0.png' },
      { label: 'body2', className: 'body-1', src: 'images/body-1.png' },
      { label: 'body3', className: 'body-2', src: 'images/body-2.png' }
    ],
    head: [
      { label: 'head1', className: 'head-0', src: 'images/head-0.png' },
      { label: 'head2', className: 'head-1', src: 'images/head-1.png' },
      { label: 'head3', className: 'head-2', src: 'images/head-2.png' }
    ],
    features: [
      { label: 'features1', className: 'features-0', src: 'images/features-0.png' },
      { label: 'features2', className: 'features-1', src: 'images/features-1.png' },
      { label: 'features3', className: 'features-2', src: 'images/features-2.png' }
    ]
  };

  // Upgraded state keeping track of index, position, and scale for each part
  const state = {
    body: { index: 0, x: 0, y: 0, scale: 50 },
    head: { index: 0, x: 0, y: 0, scale: 50 },
    features: { index: 0, x: 0, y: 0, scale: 50 }
  };

  // Helper function to apply CSS transforms (movement and scaling)
  function applyTransform(element, partData) {
    const actualScale = partData.scale / 50; 
    element.style.transform = `translate(${partData.x}px, ${partData.y}px) scale(${actualScale})`;
  }

  // function to update the preview images and labels based on the variables 
  function updatePreview() {
    const bodyChoice = variants.body[state.body.index];
    const headChoice = variants.head[state.head.index];
    const featuresChoice = variants.features[state.features.index];

    bodyEl.className = `alien-part alien-body ${bodyChoice.className}`;
    headEl.className = `alien-part alien-head ${headChoice.className}`;
    featuresEl.className = `alien-part alien-features ${featuresChoice.className}`;

    bodyImg.style.display = 'block';
    headImg.style.display = 'block';
    featuresImg.style.display = 'block';

    bodyImg.src = bodyChoice.src;
    headImg.src = headChoice.src;
    featuresImg.src = featuresChoice.src;

    bodyImg.alt = bodyChoice.label;
    headImg.alt = headChoice.label;
    featuresImg.alt = featuresChoice.label;

    bodyImg.onerror = () => { bodyImg.style.display = 'none'; };
    headImg.onerror = () => { headImg.style.display = 'none'; };
    featuresImg.onerror = () => { featuresImg.style.display = 'none'; };

    bodyLabel.textContent = bodyChoice.label;
    headLabel.textContent = headChoice.label;
    featuresLabel.textContent = featuresChoice.label;

    // Apply exact positions and scales
    applyTransform(bodyImg, state.body);
    applyTransform(headImg, state.head);
    applyTransform(featuresImg, state.features);
  }

  // event listeners and uses function for start button
  startButton.addEventListener('click', () => {
    builderPanel.classList.toggle('hidden');
    introPanel.classList.toggle('hidden');
    updatePreview();
    if (!builderPanel.classList.contains('hidden')) {
      startButton.textContent = 'Restart Builder';
      builderPanel.scrollIntoView({ behavior: 'smooth' });
    } else {
      startButton.textContent = 'Start Building';
    }
  });

  // event listeners and uses function for flip buttons
  document.querySelectorAll('.flip-button').forEach(button => {
    button.addEventListener('click', () => {
      const part = button.dataset.part;
      const direction = Number(button.dataset.direction);
      const items = variants[part];
      state[part].index = (state[part].index + direction + items.length) % items.length;
      updatePreview();
    });
  });

  // New event listeners, control panels, x y and slide scaler

  // Accordion Logic (Opening/Closing Control Panels)
  document.querySelectorAll('.panel-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parentCard = trigger.closest('.control-card');
      const isActive = parentCard.classList.contains('active');
      
      document.querySelectorAll('.control-card').forEach(card => {
        card.classList.remove('active');
      });

      if (!isActive) {
        parentCard.classList.add('active');
      }
    });
  });

  // D-Pad Buttons X y Axis
  document.querySelectorAll('.move-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const part = btn.dataset.part; 
      const axis = btn.dataset.axis; 
      const amount = Number(btn.dataset.amount); 
      
      state[part][axis] += amount;
      updatePreview();
    });
  });

  // Scale Sliders (size)
  document.querySelectorAll('.scale-slider').forEach(slider => {
    slider.addEventListener('input', (e) => {
      const part = slider.dataset.part;
      state[part].scale = Number(e.target.value);
      updatePreview();
    });
  });

  updatePreview();
});