---
layout: default 
title: Contact
permalink: /contact/
exclude: true
---


<form accept-charset="UTF-8" action="https://formspree.io/xvowjeoz" method="POST">
  <div class="row">
    <div class="col-lg-6">
     <div class="form-group">
      <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">
        {% octicon person height:20 class:"right left" aria-label:hi %}
        </span>
        <input type="text" class="form-control" placeholder="Name" name="name" aria-describedby="basic-addon1">
      </div>
      </div>
    </div>

    <div class="col-lg-6">
     <div class="form-group">
      <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">
        {% octicon mail height:20 class:"right left" aria-label:hi %}
	</span>
        <input type="text" class="form-control" placeholder="Email" name="email" aria-describedby="basic-addon1">
      </div>
      </div>
    </div>

  </div>

  <div class="form-group">
    <textarea class="form-control" name="subject" rows="1" placeholder="Subject" style="resize:none"></textarea>
  </div>

  <div class="form-group">
    <textarea class="form-control" name="body" rows="8"></textarea>
  </div>

  <div class="row">
     <div class="col-xs-12 col-md-10">
       <div class="form-group row">
         <label for="exampleSelect1" class="col-xs-12 col-sm-7 col-md-4 col-form-label"> Your message is about:</label>
         <div class="col-xs-12 col-sm-6 col-md-3 align:left">
           <select class="form-control" id="exampleSelect1" name="Topic">
	     <option>-----------</option>
             <option>Research</option>
             <option>Teaching</option>
             <option>Other</option>
           </select>
         </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-2">
       <button type="submit" class="btn btn-primary pull-xs-right col-xs-12" value="Send">Send</button>
    </div>
  </div>




</form>
