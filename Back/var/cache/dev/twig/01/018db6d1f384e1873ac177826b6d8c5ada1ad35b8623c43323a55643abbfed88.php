<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* @EasyAdmin/default/layout.html.twig */
class __TwigTemplate_8652f8be2de6ad9d6db4ae3bd95e42389405eccd7d01befa04b00b3719340dd8 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'page_title' => [$this, 'block_page_title'],
            'head_stylesheets' => [$this, 'block_head_stylesheets'],
            'head_custom_stylesheets' => [$this, 'block_head_custom_stylesheets'],
            'head_favicon' => [$this, 'block_head_favicon'],
            'head_javascript' => [$this, 'block_head_javascript'],
            'body' => [$this, 'block_body'],
            'body_id' => [$this, 'block_body_id'],
            'body_class' => [$this, 'block_body_class'],
            'wrapper_wrapper' => [$this, 'block_wrapper_wrapper'],
            'wrapper' => [$this, 'block_wrapper'],
            'header' => [$this, 'block_header'],
            'header_logo' => [$this, 'block_header_logo'],
            'user_menu' => [$this, 'block_user_menu'],
            'header_custom_menu' => [$this, 'block_header_custom_menu'],
            'sidebar' => [$this, 'block_sidebar'],
            'main_menu_wrapper' => [$this, 'block_main_menu_wrapper'],
            'flash_messages' => [$this, 'block_flash_messages'],
            'content' => [$this, 'block_content'],
            'content_header_wrapper' => [$this, 'block_content_header_wrapper'],
            'content_header' => [$this, 'block_content_header'],
            'content_title' => [$this, 'block_content_title'],
            'global_actions_wrapper' => [$this, 'block_global_actions_wrapper'],
            'global_actions' => [$this, 'block_global_actions'],
            'content_help' => [$this, 'block_content_help'],
            'main' => [$this, 'block_main'],
            'content_footer_wrapper' => [$this, 'block_content_footer_wrapper'],
            'content_footer' => [$this, 'block_content_footer'],
            'body_javascript' => [$this, 'block_body_javascript'],
            'body_custom_javascript' => [$this, 'block_body_custom_javascript'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@EasyAdmin/default/layout.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@EasyAdmin/default/layout.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html lang=\"";
        // line 2
        echo twig_escape_filter($this->env, _twig_default_filter(twig_first($this->env, twig_split_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 2, $this->source); })()), "request", [], "any", false, false, false, 2), "locale", [], "any", false, false, false, 2), "_")), "en"), "html", null, true);
        echo "\" dir=\"";
        echo (($this->extensions['EasyCorp\Bundle\EasyAdminBundle\Twig\EasyAdminTwigExtension']->getBackendConfiguration("design.rtl")) ? ("rtl") : ("ltr"));
        echo "\">
    <head>
        <meta charset=\"utf-8\">
        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
        <meta name=\"robots\" content=\"noindex, nofollow, noarchive, nosnippet, noodp, noimageindex, notranslate, nocache\" />
        <meta content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\" name=\"viewport\">
        <meta name=\"generator\" content=\"EasyAdmin\" />

        <title>";
        // line 10
        $this->displayBlock('page_title', $context, $blocks);
        echo "</title>

        ";
        // line 12
        $this->displayBlock('head_stylesheets', $context, $blocks);
        // line 15
        echo "
        ";
        // line 16
        $this->displayBlock('head_custom_stylesheets', $context, $blocks);
        // line 21
        echo "
        ";
        // line 22
        if (0 !== twig_compare($this->extensions['EasyCorp\Bundle\EasyAdminBundle\Twig\EasyAdminTwigExtension']->getBackendConfiguration("design.brand_color"), "hsl(230, 55%, 60%)")) {
            // line 23
            echo "        <style>
            :root { --color-primary: ";
            // line 24
            echo twig_escape_filter($this->env, $this->extensions['EasyCorp\Bundle\EasyAdminBundle\Twig\EasyAdminTwigExtension']->getBackendConfiguration("design.brand_color"), "html", null, true);
            echo "; }
        </style>
        ";
        }
        // line 27
        echo "
        ";
        // line 28
        $this->displayBlock('head_favicon', $context, $blocks);
        // line 32
        echo "
        ";
        // line 33
        $this->displayBlock('head_javascript', $context, $blocks);
        // line 36
        echo "
        ";
        // line 37
        if ($this->extensions['EasyCorp\Bundle\EasyAdminBundle\Twig\EasyAdminTwigExtension']->getBackendConfiguration("design.rtl")) {
            // line 38
            echo "            <link rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("bundles/easyadmin/app.rtl.css"), "html", null, true);
            echo "\">
            <link rel=\"stylesheet\" href=\"";
            // line 39
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("bundles/easyadmin/app-custom-rtl.css"), "html", null, true);
            echo "\">
        ";
        }
        // line 41
        echo "    </head>

    ";
        // line 43
        $this->displayBlock('body', $context, $blocks);
        // line 198
        echo "</html>
";
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 10
    public function block_page_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "page_title"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "page_title"));

        echo strip_tags(        $this->renderBlock("content_title", $context, $blocks));
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 12
    public function block_head_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "head_stylesheets"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "head_stylesheets"));

        // line 13
        echo "            <link rel=\"stylesheet\" href=\"";
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("bundles/easyadmin/app.css"), "html", null, true);
        echo "\">
        ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 16
    public function block_head_custom_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "head_custom_stylesheets"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "head_custom_stylesheets"));

        // line 17
        echo "            ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->extensions['EasyCorp\Bundle\EasyAdminBundle\Twig\EasyAdminTwigExtension']->getBackendConfiguration("design.assets.css"));
        foreach ($context['_seq'] as $context["_key"] => $context["css_asset"]) {
            // line 18
            echo "                <link rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl($context["css_asset"]), "html", null, true);
            echo "\">
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['css_asset'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 20
        echo "        ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 28
    public function block_head_favicon($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "head_favicon"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "head_favicon"));

        // line 29
        echo "            ";
        $context["favicon"] = $this->extensions['EasyCorp\Bundle\EasyAdminBundle\Twig\EasyAdminTwigExtension']->getBackendConfiguration("design.assets.favicon");
        // line 30
        echo "            <link rel=\"icon\" type=\"";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["favicon"]) || array_key_exists("favicon", $context) ? $context["favicon"] : (function () { throw new RuntimeError('Variable "favicon" does not exist.', 30, $this->source); })()), "mime_type", [], "any", false, false, false, 30), "html", null, true);
        echo "\" href=\"";
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl(twig_get_attribute($this->env, $this->source, (isset($context["favicon"]) || array_key_exists("favicon", $context) ? $context["favicon"] : (function () { throw new RuntimeError('Variable "favicon" does not exist.', 30, $this->source); })()), "path", [], "any", false, false, false, 30)), "html", null, true);
        echo "\" />
        ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 33
    public function block_head_javascript($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "head_javascript"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "head_javascript"));

        // line 34
        echo "            <script src=\"";
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("bundles/easyadmin/app.js"), "html", null, true);
        echo "\"></script>
        ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 43
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 44
        echo "    <body id=\"";
        $this->displayBlock('body_id', $context, $blocks);
        echo "\" class=\"easyadmin ";
        $this->displayBlock('body_class', $context, $blocks);
        echo "\">
        <script>
            document.body.classList.add(
                'easyadmin-content-width-' + (localStorage.getItem('easyadmin/content/width') || 'normal'),
                'easyadmin-sidebar-width-' + (localStorage.getItem('easyadmin/sidebar/width') || 'normal')
            );
        </script>

        ";
        // line 52
        $this->displayBlock('wrapper_wrapper', $context, $blocks);
        // line 187
        echo "
        ";
        // line 188
        $this->displayBlock('body_javascript', $context, $blocks);
        // line 189
        echo "
        ";
        // line 190
        $this->displayBlock('body_custom_javascript', $context, $blocks);
        // line 195
        echo "
    </body>
    ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 44
    public function block_body_id($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body_id"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body_id"));

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function block_body_class($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body_class"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body_class"));

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 52
    public function block_wrapper_wrapper($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "wrapper_wrapper"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "wrapper_wrapper"));

        // line 53
        echo "        <div class=\"wrapper\">
        ";
        // line 54
        $this->displayBlock('wrapper', $context, $blocks);
        // line 185
        echo "        </div>
        ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 54
    public function block_wrapper($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "wrapper"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "wrapper"));

        // line 55
        echo "            <header class=\"main-header\">
                ";
        // line 56
        $this->displayBlock('header', $context, $blocks);
        // line 119
        echo "            </header>

            <aside class=\"main-sidebar\">
            ";
        // line 122
        $this->displayBlock('sidebar', $context, $blocks);
        // line 134
        echo "            </aside>

            <div class=\"content-wrapper\">
                ";
        // line 137
        $this->displayBlock('flash_messages', $context, $blocks);
        // line 140
        echo "
                <div id=\"sidebar-resizer-handler\" class=\"resizer-handler resizer-handler-left\"></div>

                ";
        // line 143
        $this->displayBlock('content', $context, $blocks);
        // line 181
        echo "
                <div id=\"content-resizer-handler\" class=\"resizer-handler resizer-handler-right\"></div>
            </div>
        ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 56
    public function block_header($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "header"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "header"));

        // line 57
        echo "                    <nav class=\"navbar\" role=\"navigation\">
                        <button id=\"navigation-toggler\" type=\"button\" aria-label=\"Toggle navigation\">
                            <i class=\"fa fa-fw fa-bars\"></i>
                        </button>

                        <div id=\"header-logo\">
                            ";
        // line 63
        $this->displayBlock('header_logo', $context, $blocks);
        // line 68
        echo "                        </div>
                    </nav>

                    ";
        // line 71
        $context["_user_name"] = _twig_default_filter($this->extensions['EasyCorp\Bundle\EasyAdminBundle\Twig\EasyAdminTwigExtension']->readProperty(twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 71, $this->source); })()), "user", [], "any", false, false, false, 71), $this->extensions['EasyCorp\Bundle\EasyAdminBundle\Twig\EasyAdminTwigExtension']->getBackendConfiguration("user.name_property_path")), $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("user.unnamed", array(), "EasyAdminBundle"));
        // line 72
        echo "                    ";
        $context["_logout_path"] = $this->extensions['EasyCorp\Bundle\EasyAdminBundle\Twig\EasyAdminTwigExtension']->getLogoutPath();
        // line 73
        echo "                    ";
        $context["_user_has_logout"] =  !twig_test_empty((isset($context["_logout_path"]) || array_key_exists("_logout_path", $context) ? $context["_logout_path"] : (function () { throw new RuntimeError('Variable "_logout_path" does not exist.', 73, $this->source); })()));
        // line 74
        echo "                    ";
        $context["_user_is_impersonated"] = $this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_PREVIOUS_ADMIN");
        // line 75
        echo "                    ";
        ob_start();
        // line 76
        echo "                        <div class=\"popover-content-section user-details ";
        echo ((((isset($context["_user_has_logout"]) || array_key_exists("_user_has_logout", $context) ? $context["_user_has_logout"] : (function () { throw new RuntimeError('Variable "_user_has_logout" does not exist.', 76, $this->source); })()) || (isset($context["_user_is_impersonated"]) || array_key_exists("_user_is_impersonated", $context) ? $context["_user_is_impersonated"] : (function () { throw new RuntimeError('Variable "_user_is_impersonated" does not exist.', 76, $this->source); })()))) ? ("user-has-actions") : (""));
        echo "\">
                            <p class=\"small text-muted mb-0\">";
        // line 77
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("user.logged_in_as", array(), "EasyAdminBundle"), "html", null, true);
        echo "</p>
                            <p class=\"user-details-name\">
                                ";
        // line 79
        if (0 === twig_compare(((twig_get_attribute($this->env, $this->source, ($context["app"] ?? null), "user", [], "any", true, true, false, 79)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, ($context["app"] ?? null), "user", [], "any", false, false, false, 79), false)) : (false)), false)) {
            // line 80
            echo "                                    ";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("user.anonymous", array(), "EasyAdminBundle"), "html", null, true);
            echo "
                                ";
        } else {
            // line 82
            echo "                                    ";
            echo twig_escape_filter($this->env, (isset($context["_user_name"]) || array_key_exists("_user_name", $context) ? $context["_user_name"] : (function () { throw new RuntimeError('Variable "_user_name" does not exist.', 82, $this->source); })()), "html", null, true);
            echo "
                                ";
        }
        // line 84
        echo "                            </p>
                        </div>

                        ";
        // line 87
        $this->displayBlock('user_menu', $context, $blocks);
        // line 99
        echo "                    ";
        $context["_user_menu_content"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 100
        echo "
                    <div class=\"content-top navbar-custom-menu\">
                        ";
        // line 102
        $this->displayBlock('header_custom_menu', $context, $blocks);
        // line 117
        echo "                    </div>
                ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 63
    public function block_header_logo($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "header_logo"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "header_logo"));

        // line 64
        echo "                                <a class=\"logo ";
        echo ((1 === twig_compare(twig_length_filter($this->env, $this->extensions['EasyCorp\Bundle\EasyAdminBundle\Twig\EasyAdminTwigExtension']->getBackendConfiguration("site_name")), 14)) ? ("logo-long") : (""));
        echo "\" title=\"";
        echo twig_escape_filter($this->env, strip_tags($this->extensions['EasyCorp\Bundle\EasyAdminBundle\Twig\EasyAdminTwigExtension']->getBackendConfiguration("site_name")), "html", null, true);
        echo "\" href=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("easyadmin");
        echo "\">
                                    ";
        // line 65
        echo $this->extensions['EasyCorp\Bundle\EasyAdminBundle\Twig\EasyAdminTwigExtension']->getBackendConfiguration("site_name");
        echo "
                                </a>
                            ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 87
    public function block_user_menu($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "user_menu"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "user_menu"));

        // line 88
        echo "                            ";
        if (((isset($context["_user_has_logout"]) || array_key_exists("_user_has_logout", $context) ? $context["_user_has_logout"] : (function () { throw new RuntimeError('Variable "_user_has_logout" does not exist.', 88, $this->source); })()) || (isset($context["_user_is_impersonated"]) || array_key_exists("_user_is_impersonated", $context) ? $context["_user_is_impersonated"] : (function () { throw new RuntimeError('Variable "_user_is_impersonated" does not exist.', 88, $this->source); })()))) {
            // line 89
            echo "                                <div class=\"popover-content-section user-menu\">
                                    ";
            // line 90
            if ((isset($context["_user_has_logout"]) || array_key_exists("_user_has_logout", $context) ? $context["_user_has_logout"] : (function () { throw new RuntimeError('Variable "_user_has_logout" does not exist.', 90, $this->source); })())) {
                // line 91
                echo "                                        <a class=\"user-action user-action-logout\" href=\"";
                echo twig_escape_filter($this->env, (isset($context["_logout_path"]) || array_key_exists("_logout_path", $context) ? $context["_logout_path"] : (function () { throw new RuntimeError('Variable "_logout_path" does not exist.', 91, $this->source); })()), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("user.signout", array(), "EasyAdminBundle"), "html", null, true);
                echo "</a>
                                    ";
            }
            // line 93
            echo "                                    ";
            if ((isset($context["_user_is_impersonated"]) || array_key_exists("_user_is_impersonated", $context) ? $context["_user_is_impersonated"] : (function () { throw new RuntimeError('Variable "_user_is_impersonated" does not exist.', 93, $this->source); })())) {
                // line 94
                echo "                                        <a class=\"user-action user-action-exit-impersonation\" href=\"?_switch_user=_exit\">";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("user.exit_impersonation", array(), "EasyAdminBundle"), "html", null, true);
                echo "</a>
                                    ";
            }
            // line 96
            echo "                                </div>
                            ";
        }
        // line 98
        echo "                        ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 102
    public function block_header_custom_menu($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "header_custom_menu"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "header_custom_menu"));

        // line 103
        echo "                            <div class=\"user user-menu-wrapper ";
        echo (((isset($context["_user_is_impersonated"]) || array_key_exists("_user_is_impersonated", $context) ? $context["_user_is_impersonated"] : (function () { throw new RuntimeError('Variable "_user_is_impersonated" does not exist.', 103, $this->source); })())) ? ("user-is-impersonated") : (""));
        echo "\" data-toggle=\"popover\" data-placement=\"bottom\" data-container=\".user-menu-wrapper\" data-content=\"";
        echo twig_escape_filter($this->env, (isset($context["_user_menu_content"]) || array_key_exists("_user_menu_content", $context) ? $context["_user_menu_content"] : (function () { throw new RuntimeError('Variable "_user_menu_content" does not exist.', 103, $this->source); })()), "html_attr");
        echo "\" data-html=\"true\">
                                ";
        // line 104
        if ($this->extensions['EasyCorp\Bundle\EasyAdminBundle\Twig\EasyAdminTwigExtension']->getBackendConfiguration("user.display_avatar")) {
            // line 105
            echo "                                    ";
            $context["_avatar_image_path"] = $this->extensions['EasyCorp\Bundle\EasyAdminBundle\Twig\EasyAdminTwigExtension']->readProperty(twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 105, $this->source); })()), "user", [], "any", false, false, false, 105), $this->extensions['EasyCorp\Bundle\EasyAdminBundle\Twig\EasyAdminTwigExtension']->getBackendConfiguration("user.avatar_property_path"));
            // line 106
            echo "                                    ";
            if (0 === twig_compare(null, (isset($context["_avatar_image_path"]) || array_key_exists("_avatar_image_path", $context) ? $context["_avatar_image_path"] : (function () { throw new RuntimeError('Variable "_avatar_image_path" does not exist.', 106, $this->source); })()))) {
                // line 107
                echo "                                        <i class=\"fa fa-fw ";
                echo (( !(null === twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 107, $this->source); })()), "user", [], "any", false, false, false, 107))) ? ("fa-user-circle") : ("fa-user-times"));
                echo " user-avatar\"></i>
                                    ";
            } else {
                // line 109
                echo "                                        <img class=\"user-avatar\" src=\"";
                echo twig_escape_filter($this->env, (isset($context["_avatar_image_path"]) || array_key_exists("_avatar_image_path", $context) ? $context["_avatar_image_path"] : (function () { throw new RuntimeError('Variable "_avatar_image_path" does not exist.', 109, $this->source); })()), "html", null, true);
                echo "\" />
                                    ";
            }
            // line 111
            echo "                                ";
        }
        // line 112
        echo "                                ";
        if ($this->extensions['EasyCorp\Bundle\EasyAdminBundle\Twig\EasyAdminTwigExtension']->getBackendConfiguration("user.display_name")) {
            // line 113
            echo "                                    <span class=\"user-name\">";
            echo twig_escape_filter($this->env, (isset($context["_user_name"]) || array_key_exists("_user_name", $context) ? $context["_user_name"] : (function () { throw new RuntimeError('Variable "_user_name" does not exist.', 113, $this->source); })()), "html", null, true);
            echo "</span>
                                ";
        }
        // line 115
        echo "                            </div>
                        ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 122
    public function block_sidebar($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "sidebar"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "sidebar"));

        // line 123
        echo "                <section class=\"sidebar\">
                    ";
        // line 124
        $this->displayBlock('main_menu_wrapper', $context, $blocks);
        // line 131
        echo "                </section>

            ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 124
    public function block_main_menu_wrapper($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "main_menu_wrapper"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "main_menu_wrapper"));

        // line 125
        echo "                        ";
        echo twig_include($this->env, $context, [0 => ((        // line 126
(isset($context["_entity_config"]) || array_key_exists("_entity_config", $context))) ? (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["_entity_config"]) || array_key_exists("_entity_config", $context) ? $context["_entity_config"] : (function () { throw new RuntimeError('Variable "_entity_config" does not exist.', 126, $this->source); })()), "templates", [], "any", false, false, false, 126), "menu", [], "any", false, false, false, 126)) : ("")), 1 => $this->extensions['EasyCorp\Bundle\EasyAdminBundle\Twig\EasyAdminTwigExtension']->getBackendConfiguration("design.templates.menu"), 2 => "@EasyAdmin/default/menu.html.twig"]);
        // line 129
        echo "
                    ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 137
    public function block_flash_messages($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "flash_messages"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "flash_messages"));

        // line 138
        echo "                    ";
        echo twig_include($this->env, $context, (((isset($context["_entity_config"]) || array_key_exists("_entity_config", $context))) ? (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["_entity_config"]) || array_key_exists("_entity_config", $context) ? $context["_entity_config"] : (function () { throw new RuntimeError('Variable "_entity_config" does not exist.', 138, $this->source); })()), "templates", [], "any", false, false, false, 138), "flash_messages", [], "any", false, false, false, 138)) : ("@EasyAdmin/default/flash_messages.html.twig")));
        echo "
                ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 143
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content"));

        // line 144
        echo "                    <div class=\"content\">
                        ";
        // line 145
        $this->displayBlock('content_header_wrapper', $context, $blocks);
        // line 169
        echo "
                        <section id=\"main\" class=\"content-body\">
                            ";
        // line 171
        $this->displayBlock('main', $context, $blocks);
        // line 172
        echo "                        </section>

                        ";
        // line 174
        $this->displayBlock('content_footer_wrapper', $context, $blocks);
        // line 179
        echo "                    </div>
                ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 145
    public function block_content_header_wrapper($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content_header_wrapper"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content_header_wrapper"));

        // line 146
        echo "                        ";
        $context["_has_content_help"] = ((isset($context["_entity_config"]) || array_key_exists("_entity_config", $context)) && ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["_entity_config"] ?? null), twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 146, $this->source); })()), "request", [], "any", false, false, false, 146), "query", [], "any", false, false, false, 146), "get", [0 => "action"], "method", false, false, false, 146), [], "array", false, true, false, 146), "help", [], "array", true, true, false, 146)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["_entity_config"] ?? null), twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 146, $this->source); })()), "request", [], "any", false, false, false, 146), "query", [], "any", false, false, false, 146), "get", [0 => "action"], "method", false, false, false, 146), [], "array", false, true, false, 146), "help", [], "array", false, false, false, 146), false)) : (false)));
        // line 147
        echo "                        <section class=\"content-header ";
        echo (((isset($context["_has_content_help"]) || array_key_exists("_has_content_help", $context) ? $context["_has_content_help"] : (function () { throw new RuntimeError('Variable "_has_content_help" does not exist.', 147, $this->source); })())) ? ("has-content-help") : (""));
        echo "\">
                            ";
        // line 148
        $this->displayBlock('content_header', $context, $blocks);
        // line 167
        echo "                        </section>
                        ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 148
    public function block_content_header($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content_header"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content_header"));

        // line 149
        echo "                                <div class=\"d-flex flex-row justify-content-between align-content-center w-100\">
                                    <div class=\"content-header-title\">
                                        <h1 class=\"title\">";
        // line 151
        $this->displayBlock('content_title', $context, $blocks);
        echo "</h1>
                                    </div>

                                    ";
        // line 154
        $this->displayBlock('global_actions_wrapper', $context, $blocks);
        // line 157
        echo "                                </div>

                                ";
        // line 159
        $this->displayBlock('content_help', $context, $blocks);
        // line 166
        echo "                            ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 151
    public function block_content_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content_title"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content_title"));

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 154
    public function block_global_actions_wrapper($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "global_actions_wrapper"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "global_actions_wrapper"));

        // line 155
        echo "                                        <div class=\"global-actions\">";
        $this->displayBlock('global_actions', $context, $blocks);
        echo "</div>
                                    ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function block_global_actions($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "global_actions"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "global_actions"));

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 159
    public function block_content_help($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content_help"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content_help"));

        // line 160
        echo "                                    ";
        if (((isset($context["_entity_config"]) || array_key_exists("_entity_config", $context)) && ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["_entity_config"] ?? null), twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 160, $this->source); })()), "request", [], "any", false, false, false, 160), "query", [], "any", false, false, false, 160), "get", [0 => "action"], "method", false, false, false, 160), [], "array", false, true, false, 160), "help", [], "array", true, true, false, 160)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["_entity_config"] ?? null), twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 160, $this->source); })()), "request", [], "any", false, false, false, 160), "query", [], "any", false, false, false, 160), "get", [0 => "action"], "method", false, false, false, 160), [], "array", false, true, false, 160), "help", [], "array", false, false, false, 160), false)) : (false)))) {
            // line 161
            echo "                                        <div class=\"content-header-help\">
                                            ";
            // line 162
            echo $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["_entity_config"]) || array_key_exists("_entity_config", $context) ? $context["_entity_config"] : (function () { throw new RuntimeError('Variable "_entity_config" does not exist.', 162, $this->source); })()), twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 162, $this->source); })()), "request", [], "any", false, false, false, 162), "query", [], "any", false, false, false, 162), "get", [0 => "action"], "method", false, false, false, 162), [], "array", false, false, false, 162), "help", [], "array", false, false, false, 162), array(), twig_get_attribute($this->env, $this->source, (isset($context["_entity_config"]) || array_key_exists("_entity_config", $context) ? $context["_entity_config"] : (function () { throw new RuntimeError('Variable "_entity_config" does not exist.', 162, $this->source); })()), "translation_domain", [], "any", false, false, false, 162));
            echo "
                                        </div>
                                    ";
        }
        // line 165
        echo "                                ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 171
    public function block_main($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "main"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "main"));

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 174
    public function block_content_footer_wrapper($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content_footer_wrapper"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content_footer_wrapper"));

        // line 175
        echo "                            <section class=\"content-footer\">
                                ";
        // line 176
        $this->displayBlock('content_footer', $context, $blocks);
        // line 177
        echo "                            </section>
                        ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 176
    public function block_content_footer($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content_footer"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content_footer"));

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 188
    public function block_body_javascript($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body_javascript"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body_javascript"));

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 190
    public function block_body_custom_javascript($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body_custom_javascript"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body_custom_javascript"));

        // line 191
        echo "            ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->extensions['EasyCorp\Bundle\EasyAdminBundle\Twig\EasyAdminTwigExtension']->getBackendConfiguration("design.assets.js"));
        foreach ($context['_seq'] as $context["_key"] => $context["js_asset"]) {
            // line 192
            echo "                <script src=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl($context["js_asset"]), "html", null, true);
            echo "\"></script>
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['js_asset'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 194
        echo "        ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "@EasyAdmin/default/layout.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  1048 => 194,  1039 => 192,  1034 => 191,  1024 => 190,  1006 => 188,  988 => 176,  977 => 177,  975 => 176,  972 => 175,  962 => 174,  944 => 171,  934 => 165,  928 => 162,  925 => 161,  922 => 160,  912 => 159,  882 => 155,  872 => 154,  854 => 151,  844 => 166,  842 => 159,  838 => 157,  836 => 154,  830 => 151,  826 => 149,  816 => 148,  805 => 167,  803 => 148,  798 => 147,  795 => 146,  785 => 145,  774 => 179,  772 => 174,  768 => 172,  766 => 171,  762 => 169,  760 => 145,  757 => 144,  747 => 143,  734 => 138,  724 => 137,  713 => 129,  711 => 126,  709 => 125,  699 => 124,  687 => 131,  685 => 124,  682 => 123,  672 => 122,  661 => 115,  655 => 113,  652 => 112,  649 => 111,  643 => 109,  637 => 107,  634 => 106,  631 => 105,  629 => 104,  622 => 103,  612 => 102,  602 => 98,  598 => 96,  592 => 94,  589 => 93,  581 => 91,  579 => 90,  576 => 89,  573 => 88,  563 => 87,  550 => 65,  541 => 64,  531 => 63,  520 => 117,  518 => 102,  514 => 100,  511 => 99,  509 => 87,  504 => 84,  498 => 82,  492 => 80,  490 => 79,  485 => 77,  480 => 76,  477 => 75,  474 => 74,  471 => 73,  468 => 72,  466 => 71,  461 => 68,  459 => 63,  451 => 57,  441 => 56,  428 => 181,  426 => 143,  421 => 140,  419 => 137,  414 => 134,  412 => 122,  407 => 119,  405 => 56,  402 => 55,  392 => 54,  381 => 185,  379 => 54,  376 => 53,  366 => 52,  331 => 44,  319 => 195,  317 => 190,  314 => 189,  312 => 188,  309 => 187,  307 => 52,  293 => 44,  283 => 43,  270 => 34,  260 => 33,  245 => 30,  242 => 29,  232 => 28,  222 => 20,  213 => 18,  208 => 17,  198 => 16,  185 => 13,  175 => 12,  156 => 10,  145 => 198,  143 => 43,  139 => 41,  134 => 39,  129 => 38,  127 => 37,  124 => 36,  122 => 33,  119 => 32,  117 => 28,  114 => 27,  108 => 24,  105 => 23,  103 => 22,  100 => 21,  98 => 16,  95 => 15,  93 => 12,  88 => 10,  75 => 2,  72 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html lang=\"{{ app.request.locale|split('_')|first|default('en') }}\" dir=\"{{ easyadmin_config('design.rtl') ? 'rtl' : 'ltr' }}\">
    <head>
        <meta charset=\"utf-8\">
        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
        <meta name=\"robots\" content=\"noindex, nofollow, noarchive, nosnippet, noodp, noimageindex, notranslate, nocache\" />
        <meta content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\" name=\"viewport\">
        <meta name=\"generator\" content=\"EasyAdmin\" />

        <title>{% block page_title %}{{ block('content_title')|striptags|raw }}{% endblock %}</title>

        {% block head_stylesheets %}
            <link rel=\"stylesheet\" href=\"{{ asset('bundles/easyadmin/app.css') }}\">
        {% endblock %}

        {% block head_custom_stylesheets %}
            {% for css_asset in easyadmin_config('design.assets.css') %}
                <link rel=\"stylesheet\" href=\"{{ asset(css_asset) }}\">
            {% endfor %}
        {% endblock head_custom_stylesheets %}

        {% if easyadmin_config('design.brand_color') != 'hsl(230, 55%, 60%)' %}
        <style>
            :root { --color-primary: {{ easyadmin_config('design.brand_color') }}; }
        </style>
        {% endif %}

        {% block head_favicon %}
            {% set favicon = easyadmin_config('design.assets.favicon') %}
            <link rel=\"icon\" type=\"{{ favicon.mime_type }}\" href=\"{{ asset(favicon.path) }}\" />
        {% endblock %}

        {% block head_javascript %}
            <script src=\"{{ asset('bundles/easyadmin/app.js') }}\"></script>
        {% endblock head_javascript %}

        {% if easyadmin_config('design.rtl') %}
            <link rel=\"stylesheet\" href=\"{{ asset('bundles/easyadmin/app.rtl.css') }}\">
            <link rel=\"stylesheet\" href=\"{{ asset('bundles/easyadmin/app-custom-rtl.css') }}\">
        {% endif %}
    </head>

    {% block body %}
    <body id=\"{% block body_id %}{% endblock %}\" class=\"easyadmin {% block body_class %}{% endblock %}\">
        <script>
            document.body.classList.add(
                'easyadmin-content-width-' + (localStorage.getItem('easyadmin/content/width') || 'normal'),
                'easyadmin-sidebar-width-' + (localStorage.getItem('easyadmin/sidebar/width') || 'normal')
            );
        </script>

        {% block wrapper_wrapper %}
        <div class=\"wrapper\">
        {% block wrapper %}
            <header class=\"main-header\">
                {% block header %}
                    <nav class=\"navbar\" role=\"navigation\">
                        <button id=\"navigation-toggler\" type=\"button\" aria-label=\"Toggle navigation\">
                            <i class=\"fa fa-fw fa-bars\"></i>
                        </button>

                        <div id=\"header-logo\">
                            {% block header_logo %}
                                <a class=\"logo {{ easyadmin_config('site_name')|length > 14 ? 'logo-long' }}\" title=\"{{ easyadmin_config('site_name')|striptags }}\" href=\"{{ path('easyadmin') }}\">
                                    {{ easyadmin_config('site_name')|raw }}
                                </a>
                            {% endblock header_logo %}
                        </div>
                    </nav>

                    {% set _user_name = easyadmin_read_property(app.user, easyadmin_config('user.name_property_path'))|default('user.unnamed'|trans(domain = 'EasyAdminBundle')) %}
                    {% set _logout_path = easyadmin_logout_path() %}
                    {% set _user_has_logout = _logout_path is not empty %}
                    {% set _user_is_impersonated = is_granted('ROLE_PREVIOUS_ADMIN') %}
                    {% set _user_menu_content %}
                        <div class=\"popover-content-section user-details {{ _user_has_logout or _user_is_impersonated ? 'user-has-actions' }}\">
                            <p class=\"small text-muted mb-0\">{{ 'user.logged_in_as'|trans(domain = 'EasyAdminBundle') }}</p>
                            <p class=\"user-details-name\">
                                {% if app.user|default(false) == false %}
                                    {{ 'user.anonymous'|trans(domain = 'EasyAdminBundle') }}
                                {% else %}
                                    {{ _user_name }}
                                {% endif %}
                            </p>
                        </div>

                        {% block user_menu %}
                            {% if _user_has_logout or _user_is_impersonated %}
                                <div class=\"popover-content-section user-menu\">
                                    {% if _user_has_logout %}
                                        <a class=\"user-action user-action-logout\" href=\"{{ _logout_path }}\">{{ 'user.signout'|trans(domain = 'EasyAdminBundle') }}</a>
                                    {% endif %}
                                    {% if _user_is_impersonated %}
                                        <a class=\"user-action user-action-exit-impersonation\" href=\"?_switch_user=_exit\">{{ 'user.exit_impersonation'|trans(domain = 'EasyAdminBundle') }}</a>
                                    {% endif %}
                                </div>
                            {% endif %}
                        {% endblock user_menu %}
                    {% endset %}

                    <div class=\"content-top navbar-custom-menu\">
                        {% block header_custom_menu %}
                            <div class=\"user user-menu-wrapper {{ _user_is_impersonated ? 'user-is-impersonated' }}\" data-toggle=\"popover\" data-placement=\"bottom\" data-container=\".user-menu-wrapper\" data-content=\"{{ _user_menu_content|e('html_attr') }}\" data-html=\"true\">
                                {% if easyadmin_config('user.display_avatar') %}
                                    {% set _avatar_image_path = easyadmin_read_property(app.user, easyadmin_config('user.avatar_property_path')) %}
                                    {% if null == _avatar_image_path %}
                                        <i class=\"fa fa-fw {{ app.user is not null ? 'fa-user-circle' : 'fa-user-times' }} user-avatar\"></i>
                                    {% else %}
                                        <img class=\"user-avatar\" src=\"{{ _avatar_image_path }}\" />
                                    {% endif %}
                                {% endif %}
                                {% if easyadmin_config('user.display_name') %}
                                    <span class=\"user-name\">{{ _user_name }}</span>
                                {% endif %}
                            </div>
                        {% endblock header_custom_menu %}
                    </div>
                {% endblock header %}
            </header>

            <aside class=\"main-sidebar\">
            {% block sidebar %}
                <section class=\"sidebar\">
                    {% block main_menu_wrapper %}
                        {{ include([
                            _entity_config is defined ? _entity_config.templates.menu,
                            easyadmin_config('design.templates.menu'),
                            '@EasyAdmin/default/menu.html.twig'
                        ]) }}
                    {% endblock main_menu_wrapper %}
                </section>

            {% endblock sidebar %}
            </aside>

            <div class=\"content-wrapper\">
                {% block flash_messages %}
                    {{ include(_entity_config is defined ? _entity_config.templates.flash_messages : '@EasyAdmin/default/flash_messages.html.twig') }}
                {% endblock flash_messages %}

                <div id=\"sidebar-resizer-handler\" class=\"resizer-handler resizer-handler-left\"></div>

                {% block content %}
                    <div class=\"content\">
                        {% block content_header_wrapper %}
                        {% set _has_content_help = _entity_config is defined and _entity_config[app.request.query.get('action')]['help']|default(false) %}
                        <section class=\"content-header {{ _has_content_help ? 'has-content-help' }}\">
                            {% block content_header %}
                                <div class=\"d-flex flex-row justify-content-between align-content-center w-100\">
                                    <div class=\"content-header-title\">
                                        <h1 class=\"title\">{% block content_title %}{% endblock %}</h1>
                                    </div>

                                    {% block global_actions_wrapper %}
                                        <div class=\"global-actions\">{% block global_actions %}{% endblock %}</div>
                                    {% endblock %}
                                </div>

                                {% block content_help %}
                                    {% if _entity_config is defined and _entity_config[app.request.query.get('action')]['help']|default(false) %}
                                        <div class=\"content-header-help\">
                                            {{ _entity_config[app.request.query.get('action')]['help']|trans(domain = _entity_config.translation_domain)|raw }}
                                        </div>
                                    {% endif %}
                                {% endblock content_help %}
                            {% endblock content_header %}
                        </section>
                        {% endblock content_header_wrapper %}

                        <section id=\"main\" class=\"content-body\">
                            {% block main %}{% endblock %}
                        </section>

                        {% block content_footer_wrapper %}
                            <section class=\"content-footer\">
                                {% block content_footer %}{% endblock %}
                            </section>
                        {% endblock %}
                    </div>
                {% endblock content %}

                <div id=\"content-resizer-handler\" class=\"resizer-handler resizer-handler-right\"></div>
            </div>
        {% endblock wrapper %}
        </div>
        {% endblock wrapper_wrapper %}

        {% block body_javascript %}{% endblock body_javascript %}

        {% block body_custom_javascript %}
            {% for js_asset in easyadmin_config('design.assets.js') %}
                <script src=\"{{ asset(js_asset) }}\"></script>
            {% endfor %}
        {% endblock body_custom_javascript %}

    </body>
    {% endblock body %}
</html>
", "@EasyAdmin/default/layout.html.twig", "D:\\Dev\\Apothéose\\projet-jdr-pokemon-online\\Back\\vendor\\easycorp\\easyadmin-bundle\\src\\Resources\\views\\default\\layout.html.twig");
    }
}
