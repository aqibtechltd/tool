const toolsData = [
    // Image Tools
    {
        name: "Image to PNG Converter",
        description: "Convert your images to PNG format easily",
        category: "image",
        icon: "fas fa-image",
        url: "tools/image-tools/png-converter/"
    },
    {
        name: "Image to JPG Converter",
        description: "Convert images to JPG/JPEG format",
        category: "image",
        icon: "fas fa-file-image",
        url: "tools/image-tools/jpg-converter/"
    },
    {
        name: "Image Resizer",
        description: "Resize your images to any dimension",
        category: "image",
        icon: "fas fa-compress-arrows-alt",
        url: "tools/image-tools/resizer/"
    },
    {
        name: "Image Cropper",
        description: "Crop and resize your images online",
        category: "image",
        icon: "fas fa-crop",
        url: "tools/image-tools/cropper/"
    },
    {
        name: "Image Color Picker",
        description: "Extract colors and generate palettes from images",
        category: "image",
        icon: "fas fa-eye-dropper",
        url: "tools/image-tools/color-picker/"
    },
    {
        name: "Image Compressor",
        description: "Compress images without losing quality",
        category: "image",
        icon: "fas fa-compress",
        url: "tools/image-tools/compressor/"
    },
    // SEO Tools
    {
        name: "Meta Tag Generator",
        description: "Generate SEO-friendly meta tags",
        category: "seo",
        icon: "fas fa-tags",
        url: "tools/seo-tools/meta-tags/"
    },
    {
        name: "Keyword Density Checker",
        description: "Check keyword density in your content",
        category: "seo",
        icon: "fas fa-percentage",
        url: "tools/seo-tools/keyword-density/"
    },
    {
        name: "SERP Preview Tool",
        description: "Preview how your page appears in search results",
        category: "seo",
        icon: "fas fa-search",
        url: "tools/seo-tools/serp-preview/"
    },
    {
        name: "Robots.txt Generator",
        description: "Create and validate robots.txt files",
        category: "seo",
        icon: "fas fa-robot",
        url: "tools/seo-tools/robots-txt/"
    },
    {
        name: "XML Sitemap Generator",
        description: "Generate XML sitemaps for better indexing",
        category: "seo",
        icon: "fas fa-sitemap",
        url: "tools/seo-tools/sitemap/"
    },
    // Developer Tools
    {
        name: "JSON Formatter",
        description: "Format and validate JSON data",
        category: "developer",
        icon: "fas fa-code",
        url: "tools/developer-tools/json-formatter/"
    },
    {
        name: "CSS Minifier",
        description: "Minify your CSS code",
        category: "developer",
        icon: "fab fa-css3",
        url: "tools/developer-tools/css-minifier/"
    },
    {
        name: "HTML Beautifier",
        description: "Format and beautify your HTML code with proper indentation",
        category: "developer",
        icon: "fas fa-code",
        url: "tools/html-beautifier/"
    },
    {
        name: "JavaScript Minifier",
        description: "Minify and optimize JavaScript code",
        category: "developer",
        icon: "fab fa-js",
        url: "tools/developer-tools/js-minifier/"
    },
    // Financial Tools
    {
        name: "GST Calculator",
        description: "Calculate GST/VAT for your transactions",
        category: "financial",
        icon: "fas fa-percent",
        url: "tools/gst-calculator.html"
    },
    {
        name: "Discount Calculator",
        description: "Calculate discounts and final prices",
        category: "financial",
        icon: "fas fa-tags",
        url: "tools/discount-calculator.html"
    },
    {
        name: "PayPal Fee Calculator",
        description: "Calculate PayPal transaction fees",
        category: "financial",
        icon: "fab fa-paypal",
        url: "tools/paypal-fee-calculator.html"
    },
    {
        name: "Income Tax Calculator",
        description: "Calculate income tax based on your earnings",
        category: "financial",
        icon: "fas fa-money-bill",
        url: "tools/income-tax-calculator.html"
    },
    {
        name: "Savings Calculator",
        description: "Plan your savings and investments",
        category: "financial",
        icon: "fas fa-piggy-bank",
        url: "tools/savings-calculator.html"
    },
    {
        name: "Simple Interest Calculator",
        description: "Calculate simple interest on investments",
        category: "financial",
        icon: "fas fa-chart-line",
        url: "tools/simple-interest-calculator.html"
    },
    {
        name: "Compound Interest Calculator",
        description: "Calculate compound interest growth",
        category: "financial",
        icon: "fas fa-chart-bar",
        url: "tools/compound-interest-calculator.html"
    },
    {
        name: "Mortgage Calculator",
        description: "Calculate mortgage payments and amortization",
        category: "financial",
        icon: "fas fa-home",
        url: "tools/mortgage-calculator.html"
    },
    {
        name: "Loan Calculator",
        description: "Calculate loan payments and interest",
        category: "financial",
        icon: "fas fa-dollar-sign",
        url: "tools/loan-calculator.html"
    },
    // Converters
    {
        name: "Temperature Converter",
        description: "Convert between Celsius, Fahrenheit, and Kelvin",
        category: "converter",
        icon: "fas fa-thermometer-half",
        url: "tools/temperature-converter.html"
    },
    {
        name: "Weight Converter",
        description: "Convert between kg, pounds, ounces, and more",
        category: "converter",
        icon: "fas fa-balance-scale",
        url: "tools/weight-converter.html"
    },
    {
        name: "Area Converter",
        description: "Convert between square meters, feet, acres, and more",
        category: "converter",
        icon: "fas fa-vector-square",
        url: "tools/area-converter.html"
    },
    {
        name: "Currency Converter",
        description: "Convert between different currencies",
        category: "converter",
        icon: "fas fa-exchange-alt",
        url: "tools/currency-converter.html"
    },
    {
        name: "Length Converter",
        description: "Convert between different length units",
        category: "converter",
        icon: "fas fa-ruler",
        url: "tools/length-converter.html"
    },
    // Text Tools
    {
        name: "Word Counter",
        description: "Count words, characters, and paragraphs",
        category: "text",
        icon: "fas fa-calculator",
        url: "tools/word-counter.html"
    },
    {
        name: "Case Converter",
        description: "Convert text case (upper, lower, title)",
        category: "text",
        icon: "fas fa-font",
        url: "tools/case-converter.html"
    },
    {
        name: "Text Diff Checker",
        description: "Compare and find differences between two texts",
        category: "text",
        icon: "fas fa-columns",
        url: "tools/text-diff-checker.html"
    },
    {
        name: "Lorem Ipsum Generator",
        description: "Generate placeholder text for your designs",
        category: "text",
        icon: "fas fa-paragraph",
        url: "tools/lorem-ipsum-generator.html"
    },
    {
        name: "Text Translator",
        description: "Translate text between multiple languages",
        category: "text",
        icon: "fas fa-language",
        url: "tools/text-translator.html"
    },
    {
        name: "Markdown Editor",
        description: "Write and preview Markdown with live preview",
        category: "text",
        icon: "fab fa-markdown",
        url: "tools/markdown-editor.html"
    },
    {
        name: "Text Encryption",
        description: "Encrypt and decrypt text messages securely",
        category: "text",
        icon: "fas fa-lock",
        url: "tools/text-encryption.html"
    },
    // Scientific Tools
    {
        name: "Scientific Calculator",
        description: "Perform complex mathematical calculations",
        category: "scientific",
        icon: "fas fa-square-root-alt",
        url: "tools/scientific-calculator.html"
    },
    {
        name: "Chemical Equation Balancer",
        description: "Balance chemical equations automatically",
        category: "scientific",
        icon: "fas fa-flask",
        url: "tools/chemical-equation-balancer.html"
    },
    {
        name: "Periodic Table",
        description: "Interactive periodic table with element details",
        category: "scientific",
        icon: "fas fa-table",
        url: "tools/periodic-table.html"
    },
    {
        name: "Statistical Analysis",
        description: "Calculate mean, median, mode, and other statistics",
        category: "scientific",
        icon: "fas fa-chart-line",
        url: "tools/statistical-analysis.html"
    },
    {
        name: "Physics Calculator",
        description: "Calculate velocity, force, energy, and more",
        category: "scientific",
        icon: "fas fa-atom",
        url: "tools/physics-calculator.html"
    },
    {
        name: "Graph Plotter",
        description: "Plot mathematical functions and data points",
        category: "scientific",
        icon: "fas fa-chart-area",
        url: "tools/graph-plotter.html"
    }
];

// Note: This is a sample of the tools data. 
// The complete implementation should include all 100+ tools as specified in the requirements. 