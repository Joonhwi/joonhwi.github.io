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
<div style="margin-top:-16px"></div>

<!-- #### 2021~ -->

<div class="container">
{% for paper in site.data.papers %}
<div class="row">
  <div class="col-md-11" style="float:left; letter-spacing:-0.5px">
    {% if paper.released!=nill %}{% if paper.listed!=nill %}[{{ paper.listed }}]{% endif %}{% endif %} {{ paper.title }} 
  </div>
  <div class="col-2" style="text-align:right; letter-spacing:-0.5px"> 
    {% if paper.released!=0 %}
      <span style="font-family:'Consolas'; letter-spacing:-1px">
        <a href="http://arxiv.org/abs/{{ paper.arxivnumber }}">arXiv:{{ paper.arxivnumber }}</a>
      </span>
    {% else %}
      <span style="font-family:'Consolas'; letter-spacing:-1px">
        arXiv:{{ paper.arxivnumber }}
      </span>
    {% endif %}
  </div>
</div>
<hr style="visibility:hidden"/>
{% endfor %}
</div>
<hr style="visibility:hidden"/>

<!-- #### "Prehistory"

<div class="container">
{% for paper in site.data.papers-prehistory %}
<div class="row">
  <div class="col-md-11" style="float:left; letter-spacing:-0.5px">
    {% if paper.released!=nill %}{% if paper.listed!=nill %}[{{ paper.listed }}]{% endif %}{% endif %} {{ paper.title }} 
  </div>
  <div class="col-md-2" style="text-align:right; letter-spacing:-0.5px">
    {% if paper.released!=0 %}<a href="http://arxiv.org/abs/{{ paper.arxivnumber }}">arXiv:{{ paper.arxivnumber }}</a>{% else %}arXiv:{{ paper.arxivnumber }}{% endif %}
  </div>
</div>
<hr style="visibility:hidden"/>
{% endfor %}
</div> -->
<!-- font-size:-1 -->

<hr style="visibility:hidden"/>
***
<hr style="visibility:hidden"/>

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
    <div class="col-11"> 
      {% if talk.topic != nil %}
        <em>{{ talk.topic }}</em><br>
      {% endif %}
      {% if talk.link != nil %}
        <a href="{{ talk.link }}">{{ talk.title }}</a>
      {% else %}
        {{ talk.title }}{% endif %}
      {% if talk.institution != nil %}
        , {{ talk.institution }}{% endif %}
      {% if talk.location != nil %}
        , {{ talk.location }}{% endif %}
    </div>  
    {% if talk.video != nil %}
    <div class="col-1" style="text-align:right">
      (<a href="{{ talk.video }}">video</a>)
    </div>
    {% elsif talk.file != nil %}
    <div class="col-1" style="text-align:right">
      (<a href="{{ talk.file }}">file</a>)
    </div>
    {% else %}
    <div class="col-1" style="text-align:right">
      &nbsp;
    </div>
    {% endif %}
  </div>
  <hr style="visibility:hidden"/>
  {% endif %}
{% endfor %}
</div>

<hr style="visibility:hidden"/>
***
<hr style="visibility:hidden"/>

## Education

<div class="container">
{% for ed in site.data.education %}
<div class="row">
  <div class="col-md-8" style="float:left; letter-spacing:-0.5px">
    {% if ed.degree!=nill %}
      ({{ ed.degree }})
    {% endif %}
    {{ ed.institution }}
    <br>
    <span>{{ ed.address }}</span>
  </div>
  <div class="col-3" style="text-align:right; font-family:'Consolas'; letter-spacing:-1px"> 
    {% if ed.start!=nill %}
      {{ ed.start | date: "%m/%Y" }} ~
    {% endif %}{% if ed.end!=nill %}
      {{ ed.end | date: "%m/%Y" }}
    {% endif %}
  </div>
  <hr style="visibility:hidden"/>
</div>
{% endfor %}
</div>

<hr style="visibility:hidden"/>
***
<hr style="visibility:hidden"/>

<br>
<div class="container">
  <div class="row">
      <div class="col-6">  </div>
      <div class="col-6" style="text-align:right">
        Last Updated
        <span style="text-align:right; font-family:'Consolas'; letter-spacing:-1px"> >
          {{ 'now' | date: "%d/%m/%Y"}}
        </span>
      </div>
  </div>
</div>



