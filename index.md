---
layout: default
--- 
<div class="row">
<div class="col-4 col-sm-4 col-md-5">
<img src="/images/julio.jpg">  
</div>
<div class="col-8 col-sm-8 col-md-4">
Julio Parra-Martinez <br> 
California Institute of Technology, <br> 
1200 East California Boulevard,  <br>
Pasadena, California 91125, <br>
United States <br>
<!--
<br>
Office: PAB 4-737 <br>
-->
<a href="/contact/index.html">Contact </a>
</div>
<div class="col-4 col-sm-4 col-md-3">
<img src="/images/caltech_seal.png" class="float-sm-center float-md-right" style="width:100%">  
</div>
</div>
<br>

***

<br>

### Research ###

  <div class="row">
    <div class="col-md-8 col-0"> <h4> Publications </h4> </div>
    <div class="col-md-4 col-12" style="vertical-align: middle; text-align:right"> (<a href="http://inspirehep.net/author/profile/J.Parra.Martinez.1">INSPIRE</a>, <a href="https://scholar.google.com/citations?user=oASELmIAAAAJ&hl=en&authuser=1">Google Scholar</a>)</div>
  </div>
  {% for paper in site.data.papers %}
  <div class="row">
    <div class="col-md-10 col-0"> {{ paper.title }} </div>
    <div class="col-md-2 col-12" style="text-align:right"> <a href="http://arxiv.org/abs/{{ paper.arxivnumber }}">arXiv:{{ paper.arxivnumber }}</a> </div>
  </div>
  {% endfor %}
 
<br>


{% capture datenow %}{{'now' | date: '%s'}}{% endcapture %}

#### Upcoming Talks ####

{% for talk in site.data.talks reversed %}
{% capture talkdate %}{{ talk.date | date: '%s'}}{% endcapture %}
  {% if talkdate > datenow %}
  <div class="row">
     <div class="col-11"> {{ talk.date | date: "%m/%Y" }}: {% if talk.link != nil %} <a href="{{ talk.link }}">{{ talk.name }}</a>{% else %}{{ talk.name }}{% endif %}{% if talk.institution != nil %}, {{ talk.institution }}{% endif %}{% if talk.location != nil %}, {{ talk.location }} {% endif %} </div> 
  </div>
  {% endif %}
{% endfor %}

<br>


#### Conference Talks ####

{% for talk in site.data.talks %}
{% capture talkdate %}{{ talk.date | date: '%s'}}{% endcapture %}
  {% if talk.type == "conference" or talk.type == "workshop" %}
  {% if talkdate < datenow %}
  <div class="row">
    <div class="col-11"> {{ talk.date | date: "%m/%Y" }}: {% if talk.link != nil %} <a href="{{ talk.link }}">{{ talk.name }}</a>{% else %}{{ talk.name }}{% endif %}{% if talk.institution != nil %}, {{ talk.institution }}{% endif %}{% if talk.location != nil %}, {{ talk.location }} {% endif %} </div> 
    {% if talk.video != nil %}
    <div class="col-1" style="text-align:right">(<a href="{{ talk.video }}">video</a>)</div>
    {% endif %}
  </div>
  {% endif %}
  {% endif %}
{% endfor %}

<br>

#### Lectures ####

{% capture datenow %}{{'now' | date: '%s'}}{% endcapture %}
{% for talk in site.data.talks %}
{% capture talkdate %}{{ talk.date | date: '%s'}}{% endcapture %}
  {% if talkdate < datenow and talk.type == "lectures" %}
  <div class="row">
    <div class="col-11"> {{ talk.date | date: "%m/%Y" }}: {% if talk.link != nil %} <a href="{{ talk.link }}">{{ talk.name }}</a>{% else %}{{ talk.name }}{% endif %}{% if talk.institution != nil %}, {{ talk.institution }}{% endif %}{% if talk.location != nil %}, {{ talk.location }} {% endif %} </div> 
    {% if talk.video != nil %}
    <div class="col-1" style="text-align:right">(<a href="{{ talk.video }}">video</a>)</div>
    {% endif %}
  </div>
  {% endif %}
{% endfor %}

<br>

#### Seminars, colloquia, etc ####

{% capture datenow %}{{'now' | date: '%s'}}{% endcapture %}
{% for talk in site.data.talks %}
{% capture talkdate %}{{ talk.date | date: '%s'}}{% endcapture %}
  {% if talkdate < datenow and talk.type == "seminar" %}
  <div class="row">
     <div class="col-11"> {{ talk.date | date: "%m/%Y" }}: {% if talk.link != nil %} <a href="{{ talk.link }}">{{ talk.name }}</a>{% else %}{{ talk.name }}{% endif %}{% if talk.institution != nil %}, {{ talk.institution }}{% endif %}{% if talk.location != nil %}, {{ talk.location }} {% endif %} </div>  
    {% if talk.video != nil %}
    <div class="col-1" style="text-align:right">(<a href="{{ talk.video }}">video</a>)</div>
    {% endif %}
  </div>
  {% endif %}
{% endfor %}

<br>

<div class="row">
    <div class="col-6">  </div>
    <div class="col-6" style="text-align:right">  Updated: {{ 'now' | date: "%d/%m/%Y"}} </div>
</div>


