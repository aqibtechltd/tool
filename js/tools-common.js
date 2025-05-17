// Common utility functions for all tools

// Load header and footer
function loadHeaderAndFooter(depth = 1) {
    const basePath = '../'.repeat(depth);
    
    // Load header
    fetch(`${basePath}components/header.html`)
        .then(response => {
            if (!response.ok) throw new Error('Failed to load header');
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Initialize Bootstrap components after header is loaded
            initializeBootstrapComponents();
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch(`${basePath}components/footer.html`)
        .then(response => {
            if (!response.ok) throw new Error('Failed to load footer');
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Initialize Bootstrap components
function initializeBootstrapComponents() {
    // Initialize dropdowns
    const dropdownElements = document.querySelectorAll('.dropdown-toggle');
    dropdownElements.forEach(dropdown => {
        new bootstrap.Dropdown(dropdown);
    });
}

// Show error message
function showError(message, duration = 5000) {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, duration);
    }
}

// Format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Handle file drag and drop
function initializeFileDropZone(dropZone, fileInput, handleFiles) {
    if (!dropZone || !fileInput) return;

    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });

    // Highlight drop zone when item is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, unhighlight, false);
    });

    // Handle dropped files
    dropZone.addEventListener('drop', e => {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles({ target: { files: files } });
    }, false);

    fileInput.addEventListener('change', handleFiles, false);
}

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight(e) {
    const dropZone = document.getElementById('dropZone');
    if (dropZone) {
        dropZone.classList.add('dragover');
    }
}

function unhighlight(e) {
    const dropZone = document.getElementById('dropZone');
    if (dropZone) {
        dropZone.classList.remove('dragover');
    }
}

// Show/hide loading spinner
function showLoading() {
    const loadingSpinner = document.getElementById('loadingSpinner');
    if (loadingSpinner) {
        loadingSpinner.style.display = 'block';
    }
}

function hideLoading() {
    const loadingSpinner = document.getElementById('loadingSpinner');
    if (loadingSpinner) {
        loadingSpinner.style.display = 'none';
    }
}

// Update file information display
function updateFileInfo(file) {
    const fileInfo = document.getElementById('fileInfo');
    const fileName = document.getElementById('fileName');
    const fileSize = document.getElementById('fileSize');
    const fileType = document.getElementById('fileType');

    if (fileInfo && fileName && fileSize && fileType) {
        fileName.textContent = file.name;
        fileSize.textContent = formatFileSize(file.size);
        fileType.textContent = file.type;
        fileInfo.style.display = 'block';
    }
}

// Validate file
function validateFile(file, options = {}) {
    const {
        maxSize = 10 * 1024 * 1024, // 10MB default
        allowedTypes = ['image/*'],
        maxWidth = null,
        maxHeight = null
    } = options;

    return new Promise((resolve, reject) => {
        if (!file) {
            reject(new Error('No file selected'));
            return;
        }

        // Check file size
        if (file.size > maxSize) {
            reject(new Error(`File size should be less than ${formatFileSize(maxSize)}`));
            return;
        }

        // Check file type
        const isValidType = allowedTypes.some(type => {
            if (type.endsWith('/*')) {
                const baseType = type.split('/')[0];
                return file.type.startsWith(`${baseType}/`);
            }
            return file.type === type;
        });

        if (!isValidType) {
            reject(new Error('Invalid file type'));
            return;
        }

        // If image dimensions need to be checked
        if ((maxWidth || maxHeight) && file.type.startsWith('image/')) {
            const img = new Image();
            const objectUrl = URL.createObjectURL(file);

            img.onload = function() {
                URL.revokeObjectURL(objectUrl);
                if (maxWidth && this.width > maxWidth) {
                    reject(new Error(`Image width should be less than ${maxWidth}px`));
                    return;
                }
                if (maxHeight && this.height > maxHeight) {
                    reject(new Error(`Image height should be less than ${maxHeight}px`));
                    return;
                }
                resolve(file);
            };

            img.onerror = function() {
                URL.revokeObjectURL(objectUrl);
                reject(new Error('Error loading image'));
            };

            img.src = objectUrl;
        } else {
            resolve(file);
        }
    });
}

// Export functions for use in other files
window.toolsCommon = {
    loadHeaderAndFooter,
    initializeBootstrapComponents,
    showError,
    formatFileSize,
    initializeFileDropZone,
    showLoading,
    hideLoading,
    updateFileInfo,
    validateFile
}; 