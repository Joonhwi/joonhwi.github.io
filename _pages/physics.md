---
layout: page
title: Physics
permalink: /physics/
---


## Publications
<!-- <h2 style="color:--brand-color">Publications</h2> -->

<div class="container">
<p style="text-align:center">
  <a href="https://scholar.google.com/citations?user=A15RZN4AAAAJ">Google Scholar</a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://inspirehep.net/authors/1926101">InspireHEP</a>
</p>
</div>

#### 2021~

<div class="container">
{% for paper in site.data.papers %}
<div class="row">
  <div class="col-md-11" style="float:left; font-size:-1; letter-spacing:-0.5px">
    {% if paper.released!=nill %}{% if paper.listed!=nill %}[{{ paper.listed }}]{% endif %}{% endif %} {{ paper.title }} 
  </div>
  <div class="col-md-2" style="text-align:right; font-size:-1; letter-spacing:-0.5px"> 
    {% if paper.released!=0 %}<a href="http://arxiv.org/abs/{{ paper.arxivnumber }}">arXiv:{{ paper.arxivnumber }}</a>{% else %}arXiv:{{ paper.arxivnumber }}{% endif %}
  </div>
</div>
<hr style="visibility:hidden">
{% endfor %}
</div>

#### "Prehistory"

<div class="container">
{% for paper in site.data.papers-prehistory %}
<div class="row">
  <div class="col-md-11" style="float:left; font-size:-1; letter-spacing:-0.5px">
    {% if paper.released!=nill %}{% if paper.listed!=nill %}[{{ paper.listed }}]{% endif %}{% endif %} {{ paper.title }} 
  </div>
  <div class="col-md-2" style="text-align:right; font-size:-1; letter-spacing:-0.5px">
    {% if paper.released!=0 %}<a href="http://arxiv.org/abs/{{ paper.arxivnumber }}">arXiv:{{ paper.arxivnumber }}</a>{% else %}arXiv:{{ paper.arxivnumber }}{% endif %}
  </div>
</div>
<hr style="visibility:hidden">
{% endfor %}
</div>

<br><hr><br>

## Seminars etc.

<div class="container">
{% capture datenow %}{{'now' | date: '%s'}}{% endcapture %}
{% for talk in site.data.talks %}
{% capture talkdate %}{{ talk.date | date: '%s'}}{% endcapture %}
  {% if talkdate < datenow and talk.type == "seminar" %}
  <div class="row">
    <div class="col-2">
      ({{ talk.date | date: "%m/%Y" }})
    </div>
    <br>
    <div class="col-1"> 
    </div>
    <div class="col-10"> 
      {% if talk.topic != nil %}<em>{{ talk.topic }}</em>.<br>{% endif %}{% if talk.link != nil %} <a href="{{ talk.link }}">{{ talk.name }}</a>{% else %}{{ talk.name }}{% endif %}{% if talk.institution != nil %}, {{ talk.institution }}{% endif %}{% if talk.location != nil %}, {{ talk.location }} {% endif %}
    </div>  
    {% if talk.video != nil %}
    <div class="col-1" style="text-align:right">
      (<a href="{{ talk.video }}">video</a>)
    </div>
    {% endif %}
    {% if talk.file != nil %}
    <div class="col-1" style="text-align:right">
      (<a href="{{ talk.file }}">file</a>)
    </div>
    {% endif %}
  </div>
  <hr style="visibility:hidden">
  {% endif %}
{% endfor %}
</div>

<br><hr><br>

## Education

<div class="container">
  <div class="row">
    <div class="col-8"> 
      <b>
      (PhD Student)
      California Institute of Technology
      </b>
      <br>
      <div style="font-size=-1">Pasadena, CA, USA</div>
    </div>  
    <div class="col-3" style="text-align:right">
      09/2021 ~
    </div>
  </div>
  <hr style="visibility:hidden">
  <div class="row">
    <div class="col-8"> 
      <b>
      (BS in Physics)
      Seoul National University
      </b>
      <br>
      <div style="font-size=-1">Seoul, Korea</div>
    </div>  
    <div class="col-3" style="text-align:right">
      03/2017 ~ 02/2021
    </div>
  </div>
  <hr style="visibility:hidden">
  <div class="row">
    <div class="col-8"> 
      <b>
      Seoul Science High School for the Gifted
      </b>
      <br>
      <div style="font-size=-1">Seoul, Korea</div>
    </div>  
    <div class="col-3" style="text-align:right">
      03/2014 ~ 02/2017
    </div>
  </div>
</div>

<br><hr><br>

<div class="container">
  <div class="row">
      <div class="col-6">  </div>
      <div class="col-6" style="text-align:right">  Updated: 12/29/2022 </div>
  </div>
</div>



