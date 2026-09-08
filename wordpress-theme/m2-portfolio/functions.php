<?php
/** M2 Portfolio theme functions. */
if (!defined('ABSPATH')) exit;

function m2_portfolio_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form','comment-form','comment-list','gallery','caption','style','script'));
    add_theme_support('custom-logo', array('height'=>80,'width'=>240,'flex-height'=>true,'flex-width'=>true));
    register_nav_menus(array('primary'=>'Primary Navigation','footer'=>'Footer Navigation'));
}
add_action('after_setup_theme','m2_portfolio_setup');

function m2_portfolio_assets() {
    wp_enqueue_style('m2-portfolio', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_script('m2-portfolio', get_template_directory_uri().'/assets/js/theme.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts','m2_portfolio_assets');

function m2_portfolio_register_content() {
    register_post_type('m2_project', array(
        'labels'=>array('name'=>'Portfolio Projects','singular_name'=>'Project','add_new_item'=>'Add Project','edit_item'=>'Edit Project'),
        'public'=>true,'menu_icon'=>'dashicons-portfolio','supports'=>array('title','editor','thumbnail','excerpt','page-attributes'),'has_archive'=>true,'rewrite'=>array('slug'=>'portfolio'),
        'show_in_rest'=>true,
    ));
    register_taxonomy('m2_project_category','m2_project',array('label'=>'Project Categories','public'=>true,'show_in_rest'=>true,'hierarchical'=>true));
    register_post_type('m2_service', array('labels'=>array('name'=>'Services','singular_name'=>'Service'),'public'=>true,'menu_icon'=>'dashicons-admin-tools','supports'=>array('title','editor','thumbnail','page-attributes'),'show_in_rest'=>true));
}
add_action('init','m2_portfolio_register_content');

function m2_portfolio_customize($wp_customize) {
    $wp_customize->add_section('m2_home',array('title'=>'M2 Portfolio Home','priority'=>30));
    $fields=array(
        'm2_kicker'=>array('Kicker','Principal Sovereign Strategist & Chief Innovation Advisor'),
        'm2_hero_title'=>array('Hero Title','Hello, I\'m Mahmoud Awaleh'),
        'm2_hero_text'=>array('Hero Description','Strategic communications, design, digital transformation and sovereign innovation.'),
        'm2_experience'=>array('Years Experience','15+'),
        'm2_projects'=>array('Projects','200+'),
        'm2_satisfaction'=>array('Client Satisfaction','98%'),
        'm2_cta_title'=>array('CTA Title','Let\'s build something meaningful.'),
        'm2_cta_text'=>array('CTA Text','For strategic consulting, communications, design and digital transformation engagements.'),
    );
    foreach($fields as $id=>$f){
        $wp_customize->add_setting($id,array('default'=>$f[1],'sanitize_callback'=>'sanitize_textarea_field'));
        $wp_customize->add_control($id,array('label'=>$f[0],'section'=>'m2_home','type'=>($id==='m2_hero_text'||$id==='m2_cta_text'?'textarea':'text')));
    }
    $wp_customize->add_setting('m2_portrait',array('default'=>0,'sanitize_callback'=>'absint'));
    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize,'m2_portrait',array('label'=>'Hero Portrait','section'=>'m2_home','mime_type'=>'image')));
}
add_action('customize_register','m2_portfolio_customize');

function m2_get($key,$fallback=''){return get_theme_mod($key,$fallback);}
