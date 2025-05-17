<?php
/**
 * Plugin Name: Multi-Tools Calculator
 * Plugin URI: https://your-website.com/multi-tools
 * Description: A comprehensive collection of calculators and tools
 * Version: 1.0
 * Author: Aqib Chaudhary
 * Author URI: https://your-website.com
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

class MultiTools {
    public function __construct() {
        add_action('init', array($this, 'init'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_shortcode('multi_tool', array($this, 'tool_shortcode'));
        add_action('widgets_init', array($this, 'register_sidebars'));
    }

    public function init() {
        // Register custom post type for tools if needed
        $this->register_tools_post_type();
    }

    public function enqueue_scripts() {
        // Bootstrap
        wp_enqueue_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
        wp_enqueue_script('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', array('jquery'), null, true);

        // Font Awesome
        wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

        // Chart.js
        wp_enqueue_script('chart-js', 'https://cdn.jsdelivr.net/npm/chart.js@3.7.0/dist/chart.min.js', array(), null, true);

        // Custom styles and scripts
        wp_enqueue_style('multi-tools-style', plugin_dir_url(__FILE__) . 'css/style.css');
        wp_enqueue_script('multi-tools-script', plugin_dir_url(__FILE__) . 'js/main.js', array('jquery'), null, true);
    }

    public function tool_shortcode($atts) {
        $atts = shortcode_atts(array(
            'tool' => '',
        ), $atts);

        if (empty($atts['tool'])) {
            return 'Please specify a tool.';
        }

        $tool_file = plugin_dir_path(__FILE__) . 'tools/' . $atts['tool'] . '.html';
        
        if (!file_exists($tool_file)) {
            return 'Tool not found.';
        }

        ob_start();
        include $tool_file;
        return ob_get_clean();
    }

    public function register_sidebars() {
        register_sidebar(array(
            'name'          => 'Tool Sidebar',
            'id'            => 'tool-sidebar',
            'description'   => 'Sidebar for tool pages',
            'before_widget' => '<div class="widget-container">',
            'after_widget'  => '</div>',
            'before_title'  => '<h3 class="widget-title">',
            'after_title'   => '</h3>',
        ));
    }

    private function register_tools_post_type() {
        register_post_type('tool', array(
            'labels' => array(
                'name' => 'Tools',
                'singular_name' => 'Tool'
            ),
            'public' => true,
            'has_archive' => true,
            'menu_icon' => 'dashicons-calculator',
            'supports' => array('title', 'editor', 'thumbnail'),
            'rewrite' => array('slug' => 'tools')
        ));
    }
}

// Initialize the plugin
new MultiTools(); 