// DOM Elements
const navItems = document.querySelectorAll('.nav-item');

// Navigation Functions
function initNavigation() {
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.getAttribute('data-page');
            // In the Flask version, we'll navigate to the appropriate route
            switch(pageId) {
                case 'dashboard':
                    window.location.href = '/';
                    break;
                case 'monitoring':
                    window.location.href = '/monitoring';
                    break;
                case 'controls':
                    window.location.href = '/controls';
                    break;
                case 'camera':
                    window.location.href = '/camera';
                    break;
                case 'analytics':
                    window.location.href = '/analytics';
                    break;
                case 'alerts':
                    window.location.href = '/alerts';
                    break;
            }
        });
    });
}

// Toggle Switches
function initToggleSwitches() {
    const toggleSwitches = document.querySelectorAll('.toggle-switch');
    
    toggleSwitches.forEach(switchEl => {
        switchEl.addEventListener('click', () => {
            switchEl.classList.toggle('active');
            
            // Update status indicator
            const controlRow = switchEl.closest('.control-row');
            const statusBadge = controlRow.querySelector('.status-badge');
            
            if (statusBadge) {
                if (switchEl.classList.contains('active')) {
                    if (controlRow.querySelector('.control-label').textContent.includes('Water Pump')) {
                        statusBadge.textContent = 'Running';
                        statusBadge.classList.add('active');
                    } else if (controlRow.querySelector('.control-label').textContent.includes('Grow Lights')) {
                        statusBadge.textContent = 'On';
                        statusBadge.classList.add('active');
                    } else if (controlRow.querySelector('.control-label').textContent.includes('Heating System')) {
                        statusBadge.textContent = 'On';
                        statusBadge.classList.add('active');
                    } else if (controlRow.querySelector('.control-label').textContent.includes('CO2 Enrichment')) {
                        statusBadge.textContent = 'On';
                        statusBadge.classList.add('active');
                    } else if (controlRow.querySelector('.control-label').textContent.includes('Shading System')) {
                        statusBadge.textContent = 'Open';
                        statusBadge.classList.add('active');
                    } else if (controlRow.querySelector('.control-label').textContent.includes('Auto Irrigation')) {
                        statusBadge.textContent = 'On';
                        statusBadge.classList.add('active');
                    } else if (controlRow.querySelector('.control-label').textContent.includes('Nutrient Pump')) {
                        statusBadge.textContent = 'On';
                        statusBadge.classList.add('active');
                    } else {
                        statusBadge.textContent = 'Open';
                        statusBadge.classList.add('active');
                    }
                } else {
                    if (controlRow.querySelector('.control-label').textContent.includes('Water Pump')) {
                        statusBadge.textContent = 'Stopped';
                        statusBadge.classList.remove('active');
                    } else if (controlRow.querySelector('.control-label').textContent.includes('Grow Lights')) {
                        statusBadge.textContent = 'Off';
                        statusBadge.classList.remove('active');
                    } else if (controlRow.querySelector('.control-label').textContent.includes('Heating System')) {
                        statusBadge.textContent = 'Off';
                        statusBadge.classList.remove('active');
                    } else if (controlRow.querySelector('.control-label').textContent.includes('CO2 Enrichment')) {
                        statusBadge.textContent = 'Off';
                        statusBadge.classList.remove('active');
                    } else if (controlRow.querySelector('.control-label').textContent.includes('Shading System')) {
                        statusBadge.textContent = 'Closed';
                        statusBadge.classList.remove('active');
                    } else if (controlRow.querySelector('.control-label').textContent.includes('Auto Irrigation')) {
                        statusBadge.textContent = 'Off';
                        statusBadge.classList.remove('active');
                    } else if (controlRow.querySelector('.control-label').textContent.includes('Nutrient Pump')) {
                        statusBadge.textContent = 'Off';
                        statusBadge.classList.remove('active');
                    } else {
                        statusBadge.textContent = 'Closed';
                        statusBadge.classList.remove('active');
                    }
                }
            }
        });
    });
}

// Slider functionality
function initSliders() {
    // Fan speed slider
    const fanSpeedSlider = document.getElementById('fan-speed');
    const fanSpeedValue = fanSpeedSlider ? fanSpeedSlider.nextElementSibling : null;
    
    if (fanSpeedSlider && fanSpeedValue) {
        fanSpeedSlider.addEventListener('input', () => {
            fanSpeedValue.textContent = fanSpeedSlider.value + '%';
            
            // Update status indicator
            const controlRow = fanSpeedSlider.closest('.control-row');
            const statusBadge = controlRow.querySelector('.status-badge');
            if (statusBadge) {
                statusBadge.textContent = fanSpeedSlider.value + '%';
            }
        });
    }
    
    // Brightness slider
    const brightnessSlider = document.getElementById('light-brightness');
    const brightnessValue = brightnessSlider ? brightnessSlider.nextElementSibling : null;
    
    if (brightnessSlider && brightnessValue) {
        brightnessSlider.addEventListener('input', () => {
            brightnessValue.textContent = brightnessSlider.value + '%';
            
            // Update status indicator
            const controlRow = brightnessSlider.closest('.control-row');
            const statusBadge = controlRow.querySelector('.status-badge');
            if (statusBadge) {
                statusBadge.textContent = brightnessSlider.value + '%';
            }
        });
    }
    
    // CO2 level slider
    const co2Slider = document.getElementById('co2-level');
    const co2Value = co2Slider ? co2Slider.nextElementSibling : null;
    
    if (co2Slider && co2Value) {
        co2Slider.addEventListener('input', () => {
            co2Value.textContent = co2Slider.value + ' ppm';
            
            // Update status indicator
            const controlRow = co2Slider.closest('.control-row');
            const statusBadge = controlRow.querySelector('.status-badge');
            if (statusBadge) {
                statusBadge.textContent = co2Slider.value + ' ppm';
            }
        });
    }
    
    // Nutrient concentration slider
    const nutrientSlider = document.getElementById('nutrient-concentration');
    const nutrientValue = nutrientSlider ? nutrientSlider.nextElementSibling : null;
    
    if (nutrientSlider && nutrientValue) {
        nutrientSlider.addEventListener('input', () => {
            nutrientValue.textContent = nutrientSlider.value + '%';
            
            // Update status indicator
            const controlRow = nutrientSlider.closest('.control-row');
            const statusBadge = controlRow.querySelector('.status-badge');
            if (statusBadge) {
                statusBadge.textContent = nutrientSlider.value + '%';
            }
        });
    }
}

// Camera Control Functions
function initCameraControls() {
    // Movement controls
    const cameraUp = document.getElementById('camera-up');
    const cameraDown = document.getElementById('camera-down');
    const cameraLeft = document.getElementById('camera-left');
    const cameraRight = document.getElementById('camera-right');
    const cameraHome = document.getElementById('camera-home');
    
    // Zoom controls
    const zoomIn = document.getElementById('zoom-in');
    const zoomOut = document.getElementById('zoom-out');
    
    // Axis controls
    const xMinus = document.getElementById('x-minus');
    const xPlus = document.getElementById('x-plus');
    const yMinus = document.getElementById('y-minus');
    const yPlus = document.getElementById('y-plus');
    const zMinus = document.getElementById('z-minus');
    const zPlus = document.getElementById('z-plus');
    
    // Preset buttons
    const presetButtons = document.querySelectorAll('.preset-btn');
    
    // Add event listeners
    if (cameraUp) cameraUp.addEventListener('click', () => console.log('Camera Up'));
    if (cameraDown) cameraDown.addEventListener('click', () => console.log('Camera Down'));
    if (cameraLeft) cameraLeft.addEventListener('click', () => console.log('Camera Left'));
    if (cameraRight) cameraRight.addEventListener('click', () => console.log('Camera Right'));
    if (cameraHome) cameraHome.addEventListener('click', () => console.log('Camera Home'));
    
    if (zoomIn) zoomIn.addEventListener('click', () => console.log('Zoom In'));
    if (zoomOut) zoomOut.addEventListener('click', () => console.log('Zoom Out'));
    
    if (xMinus) xMinus.addEventListener('click', () => updateAxis('x', -1));
    if (xPlus) xPlus.addEventListener('click', () => updateAxis('x', 1));
    if (yMinus) yMinus.addEventListener('click', () => updateAxis('y', -1));
    if (yPlus) yPlus.addEventListener('click', () => updateAxis('y', 1));
    if (zMinus) zMinus.addEventListener('click', () => updateAxis('z', -1));
    if (zPlus) zPlus.addEventListener('click', () => updateAxis('z', 1));
    
    presetButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            console.log(`Moving to preset position ${index + 1}`);
        });
    });
}

// Update axis position
function updateAxis(axis, direction) {
    const input = document.querySelector(`input[type="number"]`);
    if (input) {
        let value = parseInt(input.value) || 0;
        value += direction;
        input.value = value;
        console.log(`Updated ${axis} axis to ${value}`);
    }
}

// Initialize Three.js scene for the greenhouse visualization
function initGreenhouse3D() {
    // Get the container
    const container = document.getElementById('3d-container');
    
    // Check if container exists
    if (!container) return;
    
    // Clear container
    container.innerHTML = '';
    
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x070f0e);
    
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 8, 12);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0x4fc3f7, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 15, 7);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);
    
    // Hemisphere light for more natural illumination
    const hemisphereLight = new THREE.HemisphereLight(0x80deea, 0x388e3c, 0.3);
    scene.add(hemisphereLight);
    
    // Create greenhouse structure
    const greenhouseGroup = new THREE.Group();
    
    // Floor with texture-like appearance
    const floorGeometry = new THREE.PlaneGeometry(22, 22);
    const floorMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x2e7d32,
        roughness: 0.9,
        metalness: 0.1
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    greenhouseGroup.add(floor);
    
    // Walls (simplified glass panels with better transparency)
    const wallMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x80deea,
        transparent: true,
        opacity: 0.25,
        roughness: 0.05,
        metalness: 0.05,
        clearcoat: 1,
        clearcoatRoughness: 0.03,
        reflectivity: 0.9
    });
    
    // Back wall
    const backWall = new THREE.Mesh(
        new THREE.BoxGeometry(22, 6, 0.2),
        wallMaterial
    );
    backWall.position.set(0, 3, -11);
    backWall.receiveShadow = true;
    greenhouseGroup.add(backWall);
    
    // Front wall
    const frontWall = new THREE.Mesh(
        new THREE.BoxGeometry(22, 6, 0.2),
        wallMaterial
    );
    frontWall.position.set(0, 3, 11);
    frontWall.receiveShadow = true;
    greenhouseGroup.add(frontWall);
    
    // Side walls
    const leftWall = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 6, 22),
        wallMaterial
    );
    leftWall.position.set(-11, 3, 0);
    leftWall.receiveShadow = true;
    greenhouseGroup.add(leftWall);
    
    const rightWall = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 6, 22),
        wallMaterial
    );
    rightWall.position.set(11, 3, 0);
    rightWall.receiveShadow = true;
    greenhouseGroup.add(rightWall);
    
    // Roof with better transparency
    const roofMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x4fc3f7,
        transparent: true,
        opacity: 0.35,
        roughness: 0.05,
        metalness: 0.05
    });
    
    const roof = new THREE.Mesh(
        new THREE.BoxGeometry(22, 0.2, 22),
        roofMaterial
    );
    roof.position.set(0, 6, 0);
    roof.receiveShadow = true;
    greenhouseGroup.add(roof);
    
    // Create plant beds with better materials
    const bedMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x5d4037,
        roughness: 0.8
    });
    
    for (let i = 0; i < 3; i++) {
        const bed = new THREE.Mesh(
            new THREE.BoxGeometry(20, 0.5, 2.5),
            bedMaterial
        );
        bed.position.set(0, 0.25, -8 + i * 8);
        bed.receiveShadow = true;
        greenhouseGroup.add(bed);
    }
    
    // Create plants with more detailed geometry
    const plantMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x4caf50,
        roughness: 0.9
    });
    
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 9; col++) {
            // Create a more detailed plant using multiple geometries
            const plantGroup = new THREE.Group();
            
            // Main stem
            const stem = new THREE.Mesh(
                new THREE.CylinderGeometry(0.1, 0.15, 1.5, 8),
                new THREE.MeshStandardMaterial({ color: 0x388e3c })
            );
            stem.position.y = 0.75;
            plantGroup.add(stem);
            
            // Leaves
            for (let i = 0; i < 5; i++) {
                const leaf = new THREE.Mesh(
                    new THREE.SphereGeometry(0.4, 6, 6),
                    plantMaterial
                );
                leaf.position.y = 1.2 + i * 0.2;
                leaf.position.x = (Math.random() - 0.5) * 0.8;
                leaf.position.z = (Math.random() - 0.5) * 0.8;
                leaf.scale.set(1, 0.2, 0.8);
                plantGroup.add(leaf);
            }
            
            plantGroup.position.set(-8 + col * 2, 0.5, -8 + row * 8);
            plantGroup.castShadow = true;
            plantGroup.receiveShadow = true;
            greenhouseGroup.add(plantGroup);
        }
    }
    
    // Add sensors with emissive materials and pulsing effect
    const sensors = [];
    const sensorMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xff9800,
        emissive: 0xff9800,
        emissiveIntensity: 0.3
    });
    
    // Temperature sensors
    for (let i = 0; i < 4; i++) {
        const sensor = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 16, 16),
            sensorMaterial
        );
        sensor.position.set(-9, 4, -8 + i * 5.3);
        sensor.castShadow = true;
        greenhouseGroup.add(sensor);
        sensors.push(sensor);
    }
    
    // Add the greenhouse to the scene
    scene.add(greenhouseGroup);
    
    // Add subtle camera movement
    let cameraAngle = 0;
    const cameraRadius = 15;
    
    // Handle window resize
    function onWindowResize() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }
    window.addEventListener('resize', onWindowResize);
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate the greenhouse slowly
        greenhouseGroup.rotation.y += 0.001;
        
        // Subtle camera movement
        cameraAngle += 0.0005;
        camera.position.x = cameraRadius * Math.sin(cameraAngle);
        camera.position.z = cameraRadius * Math.cos(cameraAngle);
        camera.lookAt(0, 3, 0);
        
        // Pulsing effect for sensors
        const pulse = Math.sin(Date.now() * 0.005) * 0.1 + 0.3;
        sensors.forEach(sensor => {
            sensor.material.emissiveIntensity = pulse;
        });
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Clean up function
    return function cleanup() {
        window.removeEventListener('resize', onWindowResize);
        container.removeChild(renderer.domElement);
    };
}

// Initialize charts
function initCharts() {
    const ctx = document.getElementById('growthChart');
    
    // Check if canvas exists
    if (!ctx) return;
    
    // Sample data for growth chart with more realistic values
    const labels = ['Day 1', 'Day 3', 'Day 5', 'Day 7', 'Day 9', 'Day 11', 'Day 13', 'Day 15', 'Day 17'];
    const temperatureData = [22, 23, 24, 25, 26, 25, 24, 24, 23];
    const humidityData = [60, 62, 65, 68, 70, 72, 70, 68, 65];
    const soilMoistureData = [45, 42, 40, 38, 36, 38, 40, 42, 45];
    const co2Data = [800, 850, 900, 950, 1000, 980, 950, 920, 900];
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Temperature (°C)',
                    data: temperatureData,
                    borderColor: '#5cd662',
                    backgroundColor: 'rgba(92, 214, 98, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: '#5cd662',
                    pointBorderColor: '#0a1413',
                    pointBorderWidth: 2,
                    yAxisID: 'y'
                },
                {
                    label: 'Humidity (%)',
                    data: humidityData,
                    borderColor: '#5ec1ff',
                    backgroundColor: 'rgba(94, 193, 255, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: '#5ec1ff',
                    pointBorderColor: '#0a1413',
                    pointBorderWidth: 2,
                    yAxisID: 'y1'
                },
                {
                    label: 'Soil Moisture (%)',
                    data: soilMoistureData,
                    borderColor: '#ffc107',
                    backgroundColor: 'rgba(255, 193, 7, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: '#ffc107',
                    pointBorderColor: '#0a1413',
                    pointBorderWidth: 2,
                    yAxisID: 'y1'
                },
                {
                    label: 'CO₂ Levels (ppm)',
                    data: co2Data,
                    borderColor: '#e91e63',
                    backgroundColor: 'rgba(233, 30, 99, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: '#e91e63',
                    pointBorderColor: '#0a1413',
                    pointBorderWidth: 2,
                    yAxisID: 'y2'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Temperature (°C)',
                        color: '#a8d6d1',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    min: 20,
                    max: 30,
                    grid: {
                        color: 'rgba(168, 214, 209, 0.1)'
                    },
                    ticks: {
                        color: '#a8d6d1',
                        font: {
                            size: 12
                        }
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Humidity / Moisture (%)',
                        color: '#a8d6d1',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    min: 30,
                    max: 80,
                    grid: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        color: '#a8d6d1',
                        font: {
                            size: 12
                        }
                    }
                },
                y2: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'CO₂ (ppm)',
                        color: '#a8d6d1',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    min: 600,
                    max: 1200,
                    grid: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        color: '#a8d6d1',
                        font: {
                            size: 12
                        }
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(168, 214, 209, 0.1)'
                    },
                    ticks: {
                        color: '#a8d6d1',
                        font: {
                            size: 12
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#e0f7f3',
                        font: {
                            size: 14
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(19, 34, 33, 0.9)',
                    titleColor: '#5cd662',
                    bodyColor: '#e0f7f3',
                    borderColor: '#2d5a56',
                    borderWidth: 1,
                    padding: 15,
                    displayColors: true,
                    titleFont: {
                        size: 14
                    },
                    bodyFont: {
                        size: 13
                    }
                }
            }
        }
    });
}

// Update time functionality
function updateTime() {
    setInterval(() => {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        // In a real implementation, you would update the time display
    }, 1000);
}

// Preset configurations
function initPresetConfigurations() {
    const presetButtons = document.querySelectorAll('.preset-btn');
    
    presetButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            presetButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const preset = button.getAttribute('data-preset');
            
            // Apply preset configuration based on time of day
            switch(preset) {
                case 'morning':
                    // Morning preset: Medium lighting, low ventilation, irrigation on
                    document.getElementById('light-brightness').value = 60;
                    document.getElementById('light-brightness').nextElementSibling.textContent = '60%';
                    document.querySelector('#light-brightness').closest('.control-row').querySelector('.status-badge').textContent = '60%';
                    
                    document.getElementById('fan-speed').value = 40;
                    document.getElementById('fan-speed').nextElementSibling.textContent = '40%';
                    document.querySelector('#fan-speed').closest('.control-row').querySelector('.status-badge').textContent = '40%';
                    
                    // Turn on water pump if not already on
                    const waterPump = document.querySelector('[data-control="water-pump"]');
                    if (!waterPump.classList.contains('active')) {
                        waterPump.click();
                    }
                    break;
                    
                case 'afternoon':
                    // Afternoon preset: High lighting, high ventilation, irrigation off
                    document.getElementById('light-brightness').value = 100;
                    document.getElementById('light-brightness').nextElementSibling.textContent = '100%';
                    document.querySelector('#light-brightness').closest('.control-row').querySelector('.status-badge').textContent = '100%';
                    
                    document.getElementById('fan-speed').value = 80;
                    document.getElementById('fan-speed').nextElementSibling.textContent = '80%';
                    document.querySelector('#fan-speed').closest('.control-row').querySelector('.status-badge').textContent = '80%';
                    
                    // Turn off water pump if not already off
                    const waterPumpAfternoon = document.querySelector('[data-control="water-pump"]');
                    if (waterPumpAfternoon.classList.contains('active')) {
                        waterPumpAfternoon.click();
                    }
                    break;
                    
                case 'evening':
                    // Evening preset: Medium lighting, medium ventilation, irrigation on
                    document.getElementById('light-brightness').value = 70;
                    document.getElementById('light-brightness').nextElementSibling.textContent = '70%';
                    document.querySelector('#light-brightness').closest('.control-row').querySelector('.status-badge').textContent = '70%';
                    
                    document.getElementById('fan-speed').value = 60;
                    document.getElementById('fan-speed').nextElementSibling.textContent = '60%';
                    document.querySelector('#fan-speed').closest('.control-row').querySelector('.status-badge').textContent = '60%';
                    
                    // Turn on water pump if not already on
                    const waterPumpEvening = document.querySelector('[data-control="water-pump"]');
                    if (!waterPumpEvening.classList.contains('active')) {
                        waterPumpEvening.click();
                    }
                    break;
                    
                case 'night':
                    // Night preset: Low lighting, low ventilation, irrigation off
                    document.getElementById('light-brightness').value = 20;
                    document.getElementById('light-brightness').nextElementSibling.textContent = '20%';
                    document.querySelector('#light-brightness').closest('.control-row').querySelector('.status-badge').textContent = '20%';
                    
                    document.getElementById('fan-speed').value = 30;
                    document.getElementById('fan-speed').nextElementSibling.textContent = '30%';
                    document.querySelector('#fan-speed').closest('.control-row').querySelector('.status-badge').textContent = '30%';
                    
                    // Turn off water pump if not already off
                    const waterPumpNight = document.querySelector('[data-control="water-pump"]');
                    if (waterPumpNight.classList.contains('active')) {
                        waterPumpNight.click();
                    }
                    break;
            }
            
            // Add visual feedback
            button.style.backgroundColor = 'rgba(92, 214, 98, 0.2)';
            
            setTimeout(() => {
                button.style.backgroundColor = '';
            }, 300);
        });
    });
    
    // Apply preset button
    const applyPresetBtn = document.getElementById('apply-preset');
    if (applyPresetBtn) {
        applyPresetBtn.addEventListener('click', () => {
            const activePreset = document.querySelector('.preset-btn.active');
            if (activePreset) {
                // Visual feedback
                applyPresetBtn.innerHTML = '<i class="fas fa-check-circle"></i> Applied!';
                setTimeout(() => {
                    applyPresetBtn.innerHTML = '<i class="fas fa-check"></i> Apply Selected';
                }, 2000);
            }
        });
    }
    
    // Save preset button
    const savePresetBtn = document.getElementById('save-preset');
    if (savePresetBtn) {
        savePresetBtn.addEventListener('click', () => {
            // Visual feedback
            savePresetBtn.innerHTML = '<i class="fas fa-save"></i> Saved!';
            setTimeout(() => {
                savePresetBtn.innerHTML = '<i class="fas fa-save"></i> Save Current';
            }, 2000);
        });
    }
    
    // Create custom preset button
    const createPresetBtn = document.getElementById('create-preset');
    if (createPresetBtn) {
        createPresetBtn.addEventListener('click', () => {
            const presetName = document.getElementById('preset-name').value;
            if (presetName.trim() !== '') {
                // Visual feedback
                createPresetBtn.innerHTML = '<i class="fas fa-check"></i> Created!';
                setTimeout(() => {
                    createPresetBtn.innerHTML = '<i class="fas fa-plus"></i> Create Preset';
                    document.getElementById('preset-name').value = '';
                }, 2000);
            }
        });
    }
}

// Numeric input functionality
function initNumericInputs() {
    const numericInputs = document.querySelectorAll('.control-numeric');
    
    numericInputs.forEach(input => {
        input.addEventListener('change', () => {
            // Ensure the value is within the valid range
            const min = parseFloat(input.min);
            const max = parseFloat(input.max);
            let value = parseFloat(input.value);
            
            if (value < min) {
                input.value = min;
                value = min;
            } else if (value > max) {
                input.value = max;
                value = max;
            }
            
            // Update status indicator if needed
            const controlRow = input.closest('.control-row');
            const statusBadge = controlRow.querySelector('.status-badge');
            if (statusBadge) {
                if (input.id === 'ph-level') {
                    statusBadge.textContent = value + ' pH';
                } else if (input.id === 'target-temperature') {
                    statusBadge.textContent = value + '°C';
                } else if (input.id === 'schedule-duration') {
                    statusBadge.textContent = value + ' min';
                }
            }
        });
    });
}

// Multi-state switch functionality
function initMultiStateSwitches() {
    const multiStateSwitches = document.querySelectorAll('.multi-state-switch');
    
    multiStateSwitches.forEach(switchEl => {
        const options = switchEl.querySelectorAll('.state-option');
        const statusBadge = switchEl.closest('.control-row').querySelector('.status-badge');
        
        options.forEach(option => {
            option.addEventListener('click', () => {
                // Remove active class from all options
                options.forEach(opt => opt.classList.remove('active'));
                
                // Add active class to clicked option
                option.classList.add('active');
                
                // Update status badge
                if (statusBadge) {
                    const state = option.getAttribute('data-state');
                    statusBadge.textContent = state.charAt(0).toUpperCase() + state.slice(1);
                    
                    if (state === 'off') {
                        statusBadge.classList.remove('active');
                    } else {
                        statusBadge.classList.add('active');
                    }
                }
            });
        });
    });
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    initNavigation();
    
    // Initialize toggle switches
    initToggleSwitches();
    
    // Initialize sliders
    initSliders();
    
    // Initialize numeric inputs
    initNumericInputs();
    
    // Initialize multi-state switches
    initMultiStateSwitches();
    
    // Initialize preset configurations
    initPresetConfigurations();
    
    // Initialize camera controls
    initCameraControls();
    
    // Initialize 3D visualization
    let cleanup3D = initGreenhouse3D();
    
    // Initialize charts
    initCharts();
    
    // Update time
    updateTime();
    
    // Handle window resize for 3D visualization
    window.addEventListener('resize', () => {
        if (cleanup3D) cleanup3D();
        cleanup3D = initGreenhouse3D();
    });
});