<?php
/**
 * Template Name: Multi-Tools Template
 * Description: A template for displaying calculator tools
 */

get_header(); ?>

<div class="multi-tools-container">
    <div class="container py-5">
        <div class="row">
            <div class="col-lg-8">
                <!-- Tool content will be loaded here -->
                <div id="tool-content"></div>
            </div>
            <div class="col-lg-4">
                <!-- Sidebar -->
                <div class="sidebar">
                    <?php if (is_active_sidebar('tool-sidebar')) : ?>
                        <?php dynamic_sidebar('tool-sidebar'); ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?> 