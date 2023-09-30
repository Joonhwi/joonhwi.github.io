// js/vis.js?ver=12

var init = function(){

	return {

		w:1436,
		h:782,

		data_raw:{},

		topics:{},
		theories:{},

		idxVisible:false,

		nodes:[],
		links:[],

		t_nodes:[],
		t_links:[],

		scaleFactor:1,

		focusDistance:180,
		topicFocus:null,
		topicHighlight:null,
		topicTransformDist:{
			'x':0,
			'y':0,
			'zoom':1
		},

		theoryFocus:null,

		fadeInTime:800,
		fadeInTimeout:null,

		animTime:300,

		loaded:false,
		loading:[],

		tt_padX_orig:18,
		tt_padX:18,

		t_hBoxCoords:{},

		//fullscreen or not
		fsMode:false,

		size:function(){
			var self = vis;

			var midSize = window.innerWidth <=998 && window.innerWidth >768,
				smallSize = window.innerWidth <=768;

			var scaleH = window.innerHeight/self.h,
				scaleW = window.innerWidth/self.w,

				adjust  = scaleH <scaleW ? scaleH*self.scaleFactor : scaleW*self.scaleFactor,
				adjustH = adjust*self.h,
				adjustW = adjust*self.w,

				offH = 45*adjust,
				offW = 12*adjust,
				padd = adjustH*0.05,

				boxW = 475*adjust -padd*2,
				boxH = adjustH*0.9,
				box_textPad = 30*adjust,

				fsFont = midSize ? 68*adjust : smallSize ? 75*adjust : 60*adjust,
				fsPadTop = midSize ? adjustH/5 : smallSize ? adjustH/6 : adjustH/3,

				fsFontWeight = smallSize ? 'bold' : midSize ? 'normal' : 'normal',

				fsFontBelow = midSize ? 34*adjust : smallSize ? 36*adjust : 24*adjust,

				fsW = 700*adjust,
				fsL = 180*adjust,
				fsPad = 45*adjust,

				titleW = 450*adjust,
				titleFont = 24*adjust,

				labelW = 450*adjust,
				labelFont = 36*adjust,

				idxW = 60*adjust,
				idx_boxW = 800*adjust,
				idx_boxPad = 24*adjust,
				idx_linkPad = 6*adjust,
				xOutW = 30*adjust,

				t_boxW  = 375*adjust -padd*2,
				t_boxH  = 525*adjust -padd*2,
				t_padd  = 3*adjust,
				t_paddL = 12*adjust,
				t_paddT = 39*adjust,
				t_bordB	= 6*adjust,

				t_tweetH = 17*adjust,
				t_tweetL = 21*adjust,

				font = 16*adjust,
				q_font = 30*adjust,
				t_font = 14*adjust,
				t_q_font = 24*adjust,

				x_font = 12*adjust
				;

			self.adjust = adjust;

			self.tt_padX = self.tt_padX_orig*adjust;

			self.fullScreen
				//.style('padding-left',fsL +'px')
				.on('click',function(){
					self.fullScreenMode();
					//d3.event.stopPropagation();
				});
			self.fullScreen.selectAll('.main')
				.style('font-size',fsFont +'px')
				.style('font-weight',fsFontWeight)
				.style('margin-top',(window.innerHeight -adjustH)/2 +fsPadTop +'px')
				.style('padding-left',fsL +'px')
				.style('width',fsW +'px')
				;
			self.fullScreen.selectAll('.below')
				.style('font-size',fsFontBelow +'px')
				.style('width',fsW +'px')
				.style('padding-top',fsPad +'px')
				;

			self.titleCred
				.style('bottom',(window.innerHeight -adjustH)/2 +padd +25*adjust +'px')
				.style('left',(window.innerWidth -adjustW)/2 +padd +30*adjust +'px')
				.style('font-size',titleFont+'px')
				.style('width',titleW +'px')
				;
			self.titleCred.selectAll('.return')
				.style('font-size',x_font+'px');

			self.hBox
				.style('top',(window.innerHeight -adjustH)/2 +padd +'px')
				.style('left',(window.innerWidth -adjustW)/2 +padd +'px')
				.style('width',boxW +'px')
				.style('height',boxH -padd*2 +'px')
				.style('padding',padd +'px')
				//.style('border-top-width',padd +'px')
				.style('border-bottom-width',padd +'px')
				.style('font-size',font+'px')
				;
			self.hBoxQ
				.style('font-size',q_font+'px')
				.style('padding-bottom',box_textPad +'px');
			self.hBoxBod
				.style('padding-top',box_textPad +'px');

			self.t_hBox
				.style('top',(window.innerHeight -adjustH)/2 +padd*2 +'px')
				.style('right',(window.innerWidth -adjustW)/2 +padd +'px')
				.style('width',t_boxW +'px')
				.style('max-height',t_boxH +'px')
				.style('padding-top',0)
				.style('padding-right',padd +'px')
				.style('padding-bottom',padd +'px')
				.style('padding-left',padd +'px')
				.style('font-size',t_font+'px')
				//.style('border-top-width',t_bordB +'px')
				//.style('border-bottom-width',t_bordB +'px')
				;
			self.t_hBoxInt
				.style('padding-top',30*adjust +'px')
				.style('padding-bottom',24*adjust +'px');
			self.t_hBoxTweet
				.style('width',t_tweetH +'px')
				.style('height',t_tweetH +'px')
				.style('margin-left',t_tweetL +'px')
				;
			self.t_hBoxName
				.style('font-size',t_q_font+'px');
			self.t_hBoxVote
				.style('font-size',font+'px');

			self.topicLabel
				.style('top',(window.innerHeight -adjustH)/2 +padd +38*adjust +'px')
				.style('left',(window.innerWidth -adjustW)/2 +adjustW/2.5 +'px')
				.style('width',labelW +'px')
				.style('font-size',labelFont+'px');
			self.xBack
				.style('bottom',(window.innerHeight -adjustH)/2 +padd +30*adjust +'px')
				.style('left',(window.innerWidth -adjustW)/2 +padd +30*adjust +'px')
				.style('font-size',x_font+'px');

			self.idx
				.style('width',idxW +'px')
				.style('height',idxW +'px')
				.style('bottom',(window.innerHeight -adjustH)/2 +padd +60*adjust +'px')
				.style('right',(window.innerWidth -adjustW)/2 +padd +20*adjust +'px');
			self.idxBox
				.style('left',(window.innerWidth -adjustW)/2 +adjustW/2 -idx_boxW/2 +'px')
				.style('top',(window.innerHeight -adjustH)/2 +padd*2 +'px')
				.style('width',idx_boxW +'px')
				.style('height',adjustH -box_textPad*2 -padd*3 -35*adjust +'px')
				.style('font-size',t_font+'px')
				.style('padding-left',box_textPad +'px')
				.style('padding-right',box_textPad +'px')
				.style('padding-bottom',box_textPad +'px')
				.style('border-top-width',box_textPad +'px')
				//.style('border-bottom-width',box_textPad +'px')
				.style('border-left-width',box_textPad/2 +'px')
				.style('border-right-width',box_textPad/2 +'px');
				;
			self.idxBox.selectAll('.title')
				.style('padding-top',box_textPad/4 +'px')
				.style('padding-bottom',box_textPad +'px')
				.style('font-size',q_font +'px');
			self.idxBox.selectAll('.col')
				//.style('padding-top',idx_boxPad +'px')
				;
			self.idxBox.selectAll('.theoryLink')
				.style('font-size',x_font+'px')
				.style('margin-left',x_font+'px')
				.style('padding-top',idx_linkPad +'px');
			self.idxBox.selectAll('.theoryLink.topic')
				.style('font-size',16*self.adjust +'px')
				.style('margin-left','0px')
				.style('padding-top',function(d){
					return d.first ? '0px' : 16*self.adjust +'px';
				});
			self.xIdx
				.style('font-size',x_font+'px')
				.style('bottom',(window.innerHeight -adjustH)/2 +padd +30*adjust +'px')
				.style('right',(window.innerWidth -adjustW)/2 +padd +30*adjust +'px');
			self.xOut
				.style('right',xOutW/2 +'px')
				.style('width',xOutW +'px')
				.style('height',xOutW +'px');
		},
		generate:function(){
			var self = vis;
			
			self.svg = d3.select('svg#map');
			self.svgG = self.svg.append('g').classed('svgG',true);
			self.titleCred = d3.select('#titleCred');

			self.hBox = d3.select('#hBox');
			self.hBoxQ = d3.select('#hBox .descrip.q');
			self.hBoxBod = d3.select('#hBox .descrip.body');

			self.t_hBox = d3.select('#t_hBox');
			self.t_hBoxInt  = d3.select('#t_hBox .t_interact');
			self.t_hBoxName = d3.select('#t_hBox .t_name');
			self.t_hBoxVote = d3.select('#t_hBox .t_vote');
			self.t_hBoxTweet = d3.select('#t_hBox .t_tweet');
			self.t_hBoxBody = d3.select('#t_hBox .t_body');

			self.topicLabel = d3.select('#topicLabel');

			self.idxHolder = d3.select('#idxHolder');
			self.idx = d3.select('#idx');
			self.idxBox = d3.select('#idxBox');
			self.xIdx = d3.select('#xIdx');
			self.xOut = d3.select('#xOut');

			self.fullScreen = d3.select('#fullScreen');
			self.xBack = d3.select('#xBack');

			self.size();
			self.getData(self.processData);
		},
		getData:function(callback){
			var self = vis,
				sets = ['topics','theories','theories_links'],
				setv = 'theories_votes'
				;

			//push all JSON files into loading array
			sets.forEach(function(d,i){
				self.loading.push(d);
			});

			//push marker for WP vote count info into loading array
			self.loading.push(setv);

			//get all JSON files
			sets.forEach(function(d,i){
				var str = 'data/' +d +'.json';
				d3.json(str,function(data){
					self.data_raw[d] = data[d];
					self.loadingManager(d,callback);
				});
			});

			//get vote data

			//Get our voting options via AJAX. 
			//Arguments:
			//1. Category slug to get voting items for.
			//2. Callback function to receive and handle the voting items.
			
			voting.get_votes('best-theory-2015',function(data){
				// This is our callback, for the list of voting options and vote counts.
				/*function display_options(data){
					// Each "voting item" is a object with the following attributes:
					// - id (int): Post ID in the WP database
					// - slug (str): Post slug - will be used to submit the vote
					// - title (str): Post title for front-end display 
					// - count (int): Total votes for this item
					// - voted (bool): True if the current user has already voted for this item.
					// Important: the votes "count" comes from the DB and is cached every 1 minute.
					// The "voted" flag is stored in the user browser's cookie. 
					// So if you reload the page just after voting, the item will be marked as
					// voted, but the count may not yet reflect your vote.		
					$.each( data.posts, function( key, item ) {

						// Here we print out the options using a list. Could use anything.
						$('<li>')
							// Add a class if this user has already voted for this item.
							.addClass(item.voted ? 'voted' : '')
							// Add the slug as a data attribute. We'll use this on the click
							// handler to send the slug to the back-end to register a new vote.
							.data('slug', item.slug)
							// Print the item's title and vote count, display it to the user.
							.html(item.title)
							.append(' (<span>' + item.count + '</span>)')
							.appendTo('body ul');

					});
				}*/
				self.data_raw[setv] = data.posts;
				self.loadingManager(setv,callback);
			});
		},
		processData:function(){
			var self = vis;
			var scale_size = d3.scale.linear()
				.domain([1,15])
				.range([5,25]);

			//positioning functions
			function posXY(d){
				var posX,
					posY,

					centerX = self.w/2,
					centerY = self.h/2,

					unit = self.w/10;
				if(d.id === 'darkMatter'){
					posX = 969;
					posY = 592;
				} else if(d.id === 'matterAnti'){
					posX = 1070;
					posY = 409;
				} else if(d.id === 'blackHole'){
					posX = 481;
					posY = 401;
				} else if(d.id === 'bigBang'){
					posX = 508;
					posY = 526;
				} else if(d.id === 'darkEnergy'){
					posX = 713;
					posY = 122;
				} else if(d.id === 'cosConst'){
					posX = 716;
					posY = 248;
				} else if(d.id === 'spaceTime'){
					posX = 553;
					posY = 281;
				} else if(d.id === 'quantGrav'){
					posX = 617;
					posY = 398;
				} else if(d.id === 'hierProb'){
					posX = 863;
					posY = 434;
				} else if(d.id === 'strongCP'){
					posX = 969;
					posY = 208;
				} else if(d.id === 'neutrinoMass'){
					posX = 776;
					posY = 669;
				} else if(d.id === 'grandU'){
					posX = 696;
					posY = 549;
				} else{
					posX = centerX;
					posY = centerY;
				}
				return [posX,posY];
			}

			//create dictionary for topics
			self.data_raw.topics.forEach(function(d){
				d.size_scaled = scale_size(d.size);
				self.topics[d.id] = d;

				d.description_HTML = d.description;

				//make links HTML-ready
				if(d.links){
					var brax = d.description.match(/\[(.+?)\]/g),
						linx = [];
					brax.forEach(function(_d,_i){
						//remove square brackets
						//concat accordant link
						var str = _d.replace(/[\[\]']+/g,''),
							a 	= "<a target='_blank' href='" +d.links[_i] +"'>" +str +"</a>";
						d.description_HTML = d.description_HTML.replace(_d,a);
					});
				}
			});
			//create dictionary for theories
			self.data_raw.theories.forEach(function(d){
				self.theories[d.id] = d;
				self.theories[d.id].topic = [];
				self.theories[d.id]['t_parents']  = [];
				self.theories[d.id]['t_children'] = [];
				self.theories[d.id]['t_siblings'] = [];

				d.description_HTML = d.description;

				//make links HTML-ready
				if(d.links){
					if(typeof(d.description) === 'object'){
						d3.keys(d.description).forEach(function(_d){
							var brax = d.description[_d].match(/\[(.+?)\]/g),
								linx = [];
							brax.forEach(function(__d,__i){
								//remove square brackets
								//concat accordant link
								var str = __d.replace(/[\[\]']+/g,''),
									lnk = d.links[_d][__i],
									a 	= "<a target='_blank' href='" +lnk +"'>" +str +"</a>";
								d.description_HTML[_d] = d.description_HTML[_d].replace(__d,a);
							});
						});
					} else{
						var brax = d.description.match(/\[(.+?)\]/g),
							linx = [];
						brax.forEach(function(_d,_i){
							//remove square brackets
							//concat accordant link
							var str = _d.replace(/[\[\]']+/g,''),
								a 	= "<a target='_blank' href='" +d.links[_i] +"'>" +str +"</a>";
							d.description_HTML = d.description_HTML.replace(_d,a);
						});
					}
				}
			});

			self.data_raw.theories_votes.forEach(function(d){
				if(self.theories[d.title]){
					self.theories[d.title].WP = d;
				}
			});

			self.data_raw.topics.forEach(function(d){
				var arrpos = posXY(d);
				d.x_orig = arrpos[0];
				d.y_orig = arrpos[1];
				//d.fixed = true;
				d.focus  = {};
				d.x = arrpos[0];
				d.y = arrpos[1];
				self.nodes.push(d);

				//push all theories into t_nodes array
				//account for topic, because some appear more than once
				if(d.theories){
					d.theories.forEach(function(_d){
						var t_node;
						t_node = self.t_nodes.indexOf(self.theories[_d]) <0 ? self.theories[_d] : $.extend(true, {}, self.theories[_d]);
						t_node.topic = d.id;

						t_node.x = d.x -Math.random();
						t_node.y = d.y -Math.random();

						t_node.speed = 0.075;
						t_node.radius = 1.5;

						t_node.focus = {};

						self.t_nodes.push(t_node);
					});
					d.theories.sort(function(a,b){ 
						var _a = self.theories[a].WP ? parseInt(self.theories[a].WP.count) : 0,
							_b = self.theories[b].WP ? parseInt(self.theories[b].WP.count) : 0;
						if (_a > _b) {
							return -1;
						}
						if (_a < _b) {
							return 1;
						}
						return 0;
					});
				}
			});
			self.data_raw.topics.forEach(function(d,i){
				if(d.children){
					d.children.forEach(function(_d){
						self.links.push({
							'source':i,
							'target':d3.keys(self.topics).indexOf(_d.id),
							'value':_d.overlap
						});
					});
				}
			});

			//input theory data into t_links
			self.data_raw.theories_links.forEach(function(d,i){
				var n1 = self.t_nodes.filter(function(t){return t.id === d.source;}),
					n2 = self.t_nodes.filter(function(t){return t.id === d.target;}),
					pairs = [],
					e1,
					e2;
				//if length is >1, could either be because of quals or because a theory
				//appears twice and its relationships don't change -- so account for both nodes
				if(n1.length >1 && n2.length >1){
					e1 = d.source_qual ? n1.filter(function(n){ return n.topic === d.source_qual; })[0] : null;
					e2 = d.target_qual ? n2.filter(function(n){ return n.topic === d.target_qual; })[0] : null;
					e1 && e2 ? pairs.push([e1,e2]) 
					: e1 && !e2 ? pairs.push([e1,n2[0]],[e1,n2[1]])
					: !e1 && e2 ? pairs.push([n1[0],e2],[n1[1],e2])
					: pairs.push([n1[0],n2[0]],[n1[0],n2[1]],[n1[1],n2[0]],[n1[1],n2[1]]);
				} else if(n1.length >1 && n2.length <=1){
					e1 = d.source_qual ? n1.filter(function(n){ return n.topic === d.source_qual; })[0] : null;
					e2 = n2[0];
					e1 ? pairs.push([e1,e2]) : pairs.push([n1[0],e2],[n1[1],e2]);
				} else if(n1.length <=1 && n2.length >1){
					e1 = n1[0];
					e2 = d.target_qual ? n2.filter(function(n){ return n.topic === d.target_qual; })[0] : null;
					e2 ? pairs.push([e1,e2]) : pairs.push([e1,n2[0]],[e1,n2[1]]);
				} else{
					e1 = n1[0];
					e2 = n2[0];
					pairs.push([e1,e2]);
				}
				pairs.forEach(function(p){
					self.t_links.push({
						'source':p[0],
						'target':p[1],
						'type':d.type
					});
					if(d.type === 'parent'){
						p[0].t_parents.push(p[1]);
						p[1].t_children.push(p[0]);
					} else if(d.type === 'sibling'){
						p[0].t_siblings.push(p[1]);
						p[1].t_siblings.push(p[0]);
					}
				});
			});

			self.draw();
		},
		loadingManager:function(_item,_callback){
			var self = vis;
			self.loading = self.loading.filter(function(_d){ return _d !== _item; });
			if(self.loading.length === 0){
				_callback();
			}
		},
		fadeIn:function(){
			var self = vis;

			self.svgG
				.style('visibility','visible')
				.style('opacity',1)
				;
			d3.select('.spinner')
				.transition()
				.duration(self.fadeInTime)
				.style('opacity',0)
			d3.select('#loading')
				.transition()
				.delay(self.fadeInTime)
				.duration(self.fadeInTime)
				.style('opacity',0)
				.transition()
				.delay(self.fadeInTime*2)
				.duration(self.fadeInTime)
				.style('display','none');
		},
		draw:function(){
			var self = vis;

			self.w = 1436;
			self.h = 782;

			self.svgG
				.attr('transform',function(){
					var x = (self.w -self.w*self.scaleFactor)/2.5,
						y = (self.h -self.h*self.scaleFactor)/2;
					return 'translate(' +x +',' +y +')scale(' +self.scaleFactor +')';
				});

			//buncha clickhandlers
			self.titleCred.classed('show',true);
			self.titleCred.selectAll('.return')
				.on('click',function(){
					if( window.self !== window.top ) {
						if(self.fsMode){
							self.fullScreenMode();
							d3.event.stopPropagation();
						}
					}else{
						if(self.fsMode){
							self.fullScreenMode();
							d3.event.stopPropagation();
						}
						window.location.replace("https://www.quantamagazine.org/20150803-physics-theories-map/");
					}
				});
			self.idxHolder
				.on('click',function(){
					if(!self.idxVisible){
						showIdxBox();	
					} else{
						hideIdxBox();
					}
				});
			self.xOut
				.on('click',function(){
					hideIdxBox();
				});
			self.xBack
				.on('click',function(){
					topicUnview(true);
				});
			self.fullScreen.selectAll('.main')
				.on('click',function(){
					self.fullScreenMode();
					d3.event.stopPropagation();;
				});
			self.t_hBoxVote
				.on('click',function(){
					theoryVote(self.theories[self.theoryFocus],this);
				});
			self.t_hBoxTweet
				.on('click',function(){
					theoryTweet(self.theories[self.theoryFocus]);
				});

			var alpha = [],
				top_arr = d3.keys(self.topics).sort();
			top_arr.forEach(function(d){
				var obj = {
					'id':d,
					'name':self.topics[d].name,
					'topic':true
				};
				alpha.push(obj);
				if(self.topics[d].theories){
					var t_arr = self.topics[d].theories.slice();
					t_arr.sort(function(a,b){
						var _a = a.toLowerCase(),
							_b = b.toLowerCase();
						if (_a < _b) {
							return -1;
						}
						if (_a > _b) {
							return 1;
						}
						return 0;
					});
					t_arr.forEach(function(_d){
						var t_obj = {
							'id':_d,
							'name':self.theories[_d].name,
							'parent':d,
							'topic':false
						}
						alpha.push(t_obj);
					});
				}
			});
			var split_01 = 22,//20,
				split_02 = 42;//40;

			//populate theory list
			var col_01,
				col_02,
				col_03;
			var topicFont  = 16*self.adjust,
				theoryFont = 12*self.adjust,

				topicPad   = 16*self.adjust,
				theoryPad  = 6*self.adjust;

			function colClick(d){
				if(d.topic){
						self.topicFocus = d.id;
						topicFocus(d.id);
						topicView(d.id);
				} else{

					var _t = self.t_nodes.filter(function(_d){
						return _d.topic === d.parent && _d.id === d.id;
					})[0];

					self.topicFocus = d.parent;
					topicFocus(d.parent);
					topicView(d.parent);

					self.theoryFocus = d.id;
					theoryLock(_t,true);
				}

				t_nodes
					.classed('spotlight',function(d){
						return self.topicFocus && d.topic === self.topicFocus;
					})
					.attr('r',function(d){
						if(self.topicFocus && d.topic === self.topicFocus){
							d.radius = c_rad;
						} else{
							d.radius = t_rad;
						}
						return d.radius;
					});

				hideIdxBox();
			}

			col_01 = d3.select('#idxBox #list .col_01')
				.selectAll('div.theoryLink')
				.data(alpha.slice(0,split_01));
			col_01.enter().append('div')
				.classed('theoryLink',true);
			col_01
				.classed('topic',function(d){
					return d.topic;
				})
				.each(function(d,i){
					d.first = i === 0;
				})
				.style('font-size',function(d){
					return d.topic ? topicFont +'px' : theoryFont +'px';
				})
				.style('margin-left',function(d){
					return d.topic ? '0px' : topicFont +'px';
				})
				.style('padding-top',function(d,i){
					return d.first ? '0px' : d.topic ? topicPad +'px' : theoryPad +'px';
				})
				.html(function(d){ return d.name; });
			col_01
				.on('click',function(d){
					colClick(d);
				});
			col_01.exit().remove();
			col_02 = d3.select('#idxBox #list .col_02')
				.selectAll('div.theoryLink')
				.data(alpha.slice(split_01,split_02));
			col_02.enter().append('div')
				.classed('theoryLink',true);
			col_02
				.classed('topic',function(d){
					return d.topic;
				})
				.each(function(d,i){
					d.first = i === 0;
				})
				.style('font-size',function(d){
					return d.topic ? topicFont +'px' : theoryFont +'px';
				})
				.style('margin-left',function(d){
					return d.topic ? '0px' : topicFont +'px';
				})
				.style('padding-top',function(d,i){
					return d.first ? '0px' : d.topic ? topicPad +'px' : theoryPad +'px';
				})
				.html(function(d){ return d.name; });
			col_02
				.on('click',function(d){
					colClick(d);
				});
			col_02.exit().remove();
			col_03 = d3.select('#idxBox #list .col_03')
				.selectAll('div.theoryLink')
				.data(alpha.slice(split_02,alpha.length));
			col_03.enter().append('div')
				.classed('theoryLink',true);
			col_03
				.classed('topic',function(d){
					return d.topic;
				})
				.each(function(d,i){
					d.first = i === 0;
				})
				.style('font-size',function(d){
					return d.topic ? topicFont +'px' : theoryFont +'px';
				})
				.style('margin-left',function(d){
					return d.topic ? '0px' : topicFont +'px';
				})
				.style('padding-top',function(d,i){
					return d.first ? '0px' : d.topic ? topicPad +'px' : theoryPad +'px';
				})
				.html(function(d){ return d.name; });
			col_03
				.on('click',function(d){
					colClick(d);
				});
			col_03.exit().remove();

			var line_linear = d3.svg.line()
				.x(function(d){ return d.x; })
				.y(function(d){ return d.y; })
				.interpolate('linear');
			var line_hull = d3.svg.line()
				.x(function(d){ return d.x; })
				.y(function(d){ return d.y; })
				.interpolate('linear-closed')
				;

			var fisheye = d3.fisheye.circular()
			    .radius(self.h/2)
			    .distortion(1);

			var zoom = d3.behavior.zoom();

			var force = d3.layout.force()
			    .nodes(self.nodes)
			    .links(self.links)
			    .size([self.w,self.h])
			    .charge(-1500)
			    .linkStrength(function(d){
			    	return 0;
			    })
			    .on('tick',tick)
			    .start()
			    ;
			var t_force = d3.layout.force()
				.nodes(self.t_nodes)
				.links(self.t_links)
				.size([self.w,self.h])
				.gravity(0)
				.charge(0)
				.linkStrength(0)
			    .on('tick',t_tick)
				.start()
				;

			//self.loading.push(force,t_force);

			var topics,
				links,
				hulls,

				labelContainer,
				labelsG,
				labels,

				theories,
				t_nodeG,
				t_nodes,
				t_links,

				t_labelsG,
				t_labels
				;

			//theory radius/padding params
			var t_rad = 1.5,
				f_rad = t_rad,
				//c_rad = 15
				c_rad = f_rad,

				t_pad = 18;

			self.svg
				.on('click',function(){

					var mouse = d3.mouse(this),
						mX = mouse[0] -self.topicTransformDist.x,
						mY = mouse[1] -self.topicTransformDist.y,
						pX = d3.event.pageX -self.topicTransformDist.x,
						pY = d3.event.pageY -self.topicTransformDist.y;
					var focus = getClosest(mX,mY),
						//t_focus = getClosestTheory(mX,mY);
						t_focus = self.topicFocus ? getClosestTheory(mX,mY,self.topicFocus) : getClosestTheory(mX,mY),
						t_focusDistance = self.topicFocus ? self.focusDistance/1.5 : self.focusDistance/3;

					if(self.idxVisible){
						hideIdxBox();
					} else{

						//if clicking into topic from zoomed-out view
						if(!self.topicFocus && focus.distance <self.focusDistance){
							self.topicFocus = focus.id;
							topicFocus(focus.id);
							topicView(focus.id);
							theoryUnfocus();

						//if clicking to a different topic from a selected topic -- catch a theory interception
						} else if(self.topicFocus && focus.distance <self.focusDistance && self.topicFocus !== focus.id){

							//if close enough to a theory, select that theory
							if(t_focus.distance <t_focusDistance){
								self.theoryFocus = t_focus.id;
								theoryLock(t_focus,true);

							//if not, refocus on new topic
							} else{
								self.topicFocus = focus.id;
								topicFocus(focus.id);
								topicView(focus.id);
								theoryUnfocus();
							}

						//if clicking on the selected topic
						} else if(self.topicFocus && focus.distance <self.focusDistance && self.topicFocus === focus.id){

							//if clicking on a theory when no theory is selected
							if(!self.theoryFocus && t_focus.distance <t_focusDistance){
								self.theoryFocus = t_focus.id;
								theoryLock(t_focus,true);

							//if clicking on a theory that's different from the selected theory
							} else if(self.theoryFocus && t_focus.distance <t_focusDistance && self.theoryFocus !== t_focus.id){
								self.theoryFocus = t_focus.id;
								theoryLock(t_focus,true);

							//if clicking on the selected theory
							} else if(self.theoryFocus && t_focus.distance <t_focusDistance && self.theoryFocus === t_focus.id){
								theoryUnfocus();

							//if clicking on the topic but not close enough to a theory
							} else{
							}

						//if clicking elsewhere on the map
						} else{
							topicUnview(true);
						}

						t_nodes
							.classed('spotlight',function(d){
								return self.topicFocus && d.topic === self.topicFocus;
							})
							.attr('r',function(d){
								if(self.topicFocus && d.topic === self.topicFocus){
									d.radius = c_rad;
								} else{
									d.radius = t_rad;
								}
								return d.radius;
							});
					}
				})
				.on('mousemove',function(){

					if(!self.theoryFocus){

						var mouse = d3.mouse(this),
							mX = mouse[0] -self.topicTransformDist.x,
							mY = mouse[1] -self.topicTransformDist.y,
							pX = d3.event.pageX -self.topicTransformDist.x,
							pY = d3.event.pageY -self.topicTransformDist.y;
						var focus = getClosest(mX,mY),
							t_focus = self.topicFocus ? getClosestTheory(mX,mY,self.topicFocus) : getClosestTheory(mX,mY),
							t_focusDistance = self.topicFocus ? self.focusDistance/1.5 : self.focusDistance/3;

						fisheye.focus(mouse);

						//highlight closest topic
						if(focus.distance <self.focusDistance){
							self.topicHighlight = focus.id;
							topicFocus(focus.id);
						} else if(!self.topicFocus){
							topicUnfocus();
						}

						//highlight closest theories
						if(	!self.topicFocus
							&& focus.distance <self.focusDistance
							&& t_focus.distance <t_focusDistance
							//&& t_focus.topic === focus.id
						){
							theoryFocus(t_focus);
						} else if(self.topicFocus
							&& t_focus.distance <t_focusDistance
							//&& t_focus.topic === focus.id 
							&& t_focus.topic === self.topicFocus
						){
							theoryFocus(t_focus);
						} else{
							theoryUnfocus();
						}

						links.call(update_link);
						hulls.call(update_hull);
						labelsG.call(update_label);

						t_nodes
							.classed('spotlight',function(d){
								return self.topicFocus && d.topic === self.topicFocus;
							})
							.classed('semihighlight',function(d){
								return d.topic === focus.id && focus.distance <self.focusDistance && (self.topicFocus && d.topic !== self.topicFocus);
							})
							.classed('highlight',function(d){
								return d.topic === focus.id && (focus.distance <self.focusDistance || self.topicFocus && d.topic === self.topicFocus);
							})
							.attr('r',function(d){
								if(!self.topicFocus && d.topic === focus.id && focus.distance <self.focusDistance){
									d.radius = f_rad;
								} else if(self.topicFocus && d.topic === self.topicFocus){
									d.radius = c_rad;
								} else{
									d.radius = t_rad;
								}
								return d.radius;
							});

					//still carry out theory sub-highlighting within selected topic
					} else if(self.topicFocus && self.theoryFocus){

						var mouse = d3.mouse(this),
							mX = mouse[0] -self.topicTransformDist.x,
							mY = mouse[1] -self.topicTransformDist.y,
							pX = d3.event.pageX -self.topicTransformDist.x,
							pY = d3.event.pageY -self.topicTransformDist.y;
						var focus = getClosest(mX,mY),
							t_focus = getClosestTheory(mX,mY),
							t_focusDistance = self.topicFocus ? self.focusDistance/1.5 : self.focusDistance/3;

						fisheye.focus(mouse);

						//highlight closest topic
						if(focus.distance <self.focusDistance){
							self.topicHighlight = focus.id;
							topicFocus(focus.id);
						} else if(!self.topicFocus){
							topicUnfocus();
						}

						links.call(update_link);
						hulls.call(update_hull);
						labelsG.call(update_label);

						if(	t_focus.distance <t_focusDistance && t_focus.topic === self.topicFocus){
							t_nodes
								/*.each(function(d){
									d.fixed = d.id === t_focus.id;
								})*/
								.classed('semihov',function(d){
									return d.id === t_focus.id;
								});
							t_labelsG
								.classed('semihov',function(d){
									return d.id === t_focus.id;
								});
						} else{
							t_nodes.classed('semihov',false);
							t_labelsG.classed('semihov',false);
						}
					}
				});

			//TOPICS
			topics = self.svgG.selectAll('g.topics')
				.data([force]);
			topics.enter().append('g')
				.classed('topics',true);
			topics.exit().remove();
			links = topics.selectAll('path.link')
				.data(function(d){ return d.links(); })
			links.enter().append('path')
				.classed('link',true);
			links
				.attr('class',function(d){
					return 'link ' +d.source.id +' ' +d.target.id;
				});
			links.exit().remove();
			hulls = topics.selectAll('path.hull')
				.data(function(d){ return d.nodes(); })
				;
			hulls.enter().append('path')
				.classed('hull',true);
			hulls
				.attr('class',function(d){
					return 'hull ' +d.id;
				})
				.attr('vector-effect','non-scaling-stroke')
				;
			hulls.exit().remove();

			//THEORIES
			theories = self.svgG.selectAll('g.theories')
				.data([t_force]);
			theories.enter().append('g')
				.classed('theories',true);
			theories.exit().remove();
			t_links = theories.selectAll('path.t_link')
				.data(function(d){ return d.links(); });
			t_links.enter().append('path')
				.classed('t_link',true);
			t_links.exit().remove();
			t_nodes = theories.selectAll('circle.t_node')
				.data(function(d){ return d.nodes(); })
				;
			t_nodes.enter().append('circle')
				.classed('t_node',true);
			t_nodes
				.attr('class',function(d){
					return d.id +' t_node';
				})
				.attr('r',function(d){
					d.radius = t_rad;
					return d.radius;
				});
			t_nodes.exit().remove();
			t_labelsG = theories.selectAll('g.t_labelsG')
				.data(function(d){ return d.nodes(); })
				;
			t_labelsG.enter().append('g')
				.classed('t_labelsG',true);
			t_labelsG.exit().remove();
			t_labels = t_labelsG.selectAll('text.t_label')
				.data(function(d,i){ return [d]; });
			t_labels.enter().append('text')
				.classed('t_label',true);
			t_labels
				.attr('x',9)
				.attr('y',4)
				.text(function(d){
					return d.name;
				});
			t_labels.exit().remove();
			t_counts = t_labels.selectAll('tspan.t_count')
				.data(function(d,i){ return [d]; });
			t_counts.enter().append('tspan')
				.classed('t_count',true);
			t_counts
				.classed('hide',true)
				.attr('x',function(d){
					var parentW = this.parentNode.getBBox().width;
					return parentW +15;
				})
				.attr('y',4)
				.style('font-size',8*self.adjust +'px')
				.text(function(d){
					var count = d.WP ? d.WP.count : 0;
					return '(' +count +')';
				});
			t_counts.exit().remove();

			//LABELS
			labelContainer = self.svgG.selectAll('g.labelContainer')
				.data([d3.keys(self.topics)]);
			labelContainer.enter().append('g')
				.classed('labelContainer',true);
			labelContainer.exit().remove();
			labelsG = labelContainer.selectAll('g.labelsG')
				.data(function(d){ return d; });
			labelsG.enter().append('g')
				.classed('labelsG',true);
			labelsG
				.style('text-anchor',function(d){
					return self.topics[d].x <self.w/2 ? 'end' : 'start';
				});
			labelsG.exit().remove();
			labels = labelsG.selectAll('text.label')
				.data(function(d){ return [d]; });
			labels.enter().append('text')
				.classed('label',true);
			labels
				.text(function(d){
					return self.topics[d].name;
				});
			labels.exit().remove();

			function topicFocus(_id){

				//only highlight if closest to mouse
				hulls
					.classed('highlight',function(d,i){
						return d.id === _id;
					})
					.classed('semihighlight',function(d,i){
						return d.id === _id && (self.topicFocus && d.id !== self.topicFocus);
					})
					.classed('unhighlight',function(d,i){
						return d.id !== _id;
					});
				labelsG
					.classed('highlight',function(d,i){
						return self.topics[d].id === _id;
					})
					.classed('semihighlight',function(d,i){
						return self.topics[d].id === _id && (self.topicFocus && self.topics[d].id !== self.topicFocus);
					})
					.classed('unhighlight',function(d,i){
						return self.topics[d].id !== _id;
					});
			}

			function topicUnfocus(){
				self.topicFocus = null;
				self.topicHighlight = null;
				
				hulls
					.classed('highlight',false)
					.classed('semihighlight',false)
					.classed('unhighlight',false);
				labelsG
					.classed('highlight',false)
					.classed('semihighlight',false)
					.classed('unhighlight',false);
				/*self.hBox
					.classed('highlight',false)
					.html('');*/
			}

			function topicView(_id){

				var ctr = {'x':self.w/1.75,'y':self.h/2};

				self.xBack.classed('show',true);

				links.call(update_link);
				hulls.call(update_hull);
				labelsG.call(update_label);
				
				self.hBox
					.classed('highlight',true)
					.property('scrollTop',0)
					/*.html(function(d){
						var quest = self.topics[_id].question,
							descrip = self.topics[_id].description_HTML;
						return '<div class="descrip q">' +quest +'</div>' +'<div class="descrip body">' +descrip +'</div>';
					})*/
					;
				self.hBoxQ
					.html(function(d){
						return self.topics[_id].question;
					});
				self.hBoxBod
					.html(function(d){
						return self.topics[_id].description_HTML;
					});
				self.titleCred.classed('show',false);

				self.svgG
					.transition()
					.duration(self.animTime)
					.attr('transform',function(){
						var scaleTo = 1.5,
							hull = d3.select('.hull.' +_id).node().getBBox(),
							zoom_X = ctr.x -(hull.x +hull.width/2)*scaleTo,
							zoom_Y = ctr.y -(hull.y +hull.height/2)*scaleTo
							;

						//self.topicTransformDist.hull = hull;
						self.topicTransformDist.x = zoom_X;
						self.topicTransformDist.y = zoom_Y;
						self.topicTransformDist.zoom = scaleTo;
						return 'translate(' +zoom_X +',' +zoom_Y +')scale(' +scaleTo +')';
					});

				self.topicLabel
					.html(function(){
						return '<span>' +self.topics[_id].name +'</span>';
					})
					.classed('topicView',true);

				hulls.classed('focus',function(d){
					return d.id === _id;
				});
				labelsG.classed('topicView',function(d){
					return d === _id;
				});

				t_counts
					.classed('hide',function(d){
						return d.topic !== self.topicFocus;
					});

				//set all child theories to hover around the center of the path
				self.t_nodes.forEach(function(d){
					if(d.topic === _id){
						var hull = d3.select('.hull.'+d.topic).node().getBBox();
						d.focus.x = hull.x +hull.width/2;
						d.focus.y = hull.y +hull.height/2;
					} else{
						d.focus.x = null;
						d.focus.y = null;
					}
				});
			}

			function topicUnview(_trans){

				var ctr = {'x':self.w/2,'y':self.h/2},
					_id = self.topicFocus;

				self.xBack.classed('show',false);

				self.titleCred.classed('show',true);

				self.topicFocus = null;
				self.topicHighlight = null;

				t_counts.classed('hide',true);

				//reset set focus x/y of associated theories
				self.t_nodes.forEach(function(d,i){
					d.focus.x = null;
					d.focus.y = null;
				});

				links.call(update_link);
				hulls.call(update_hull);
				labelsG.call(update_label);

				hulls
					.classed('focus',false)
					.classed('highlight',false)
					.classed('unhighlight',false);
				labelsG
					.classed('highlight',false)
					.classed('unhighlight',false);
				self.hBox
					.classed('highlight',false)
					//.html('')
					;
				self.hBoxQ.html('');
				self.hBoxBod.html('');

				self.svgG
					.transition()
					.duration(self.animTime)
					.attr('transform',function(){
						self.topicTransformDist.x = 0;
						self.topicTransformDist.y = 0;
						return 'translate(0,0)scale(' +self.scaleFactor +')';
					});

				self.topicLabel.classed('topicView',false);
				labelsG.classed('topicView',false);

				theoryUnfocus();
			}

			function theoryFocus(_d,_time){

				theoryUnfocus();

				var theory = _d,
					time   = _time !== null && _time >=0 ? _time : 0.5;

				//after brief pause, implement full lock
				//if in topic focus, no delay
				if(time >0){
					self.fadeInTimeout = setTimeout(function(){
						theoryLock(theory);
					},self.fadeInTime*time);
				} else{
					theoryLock(theory);
				}

				t_nodes
					/*.each(function(d){
						d.fixed = d.id === theory.id && self.topicFocus && d.topic === self.topicFocus;
					})*/
					.classed('hov',function(d){
						return d.id === theory.id && d.topic === theory.topic;
					})
					.classed('semihov',false)
					;
				t_labelsG
					.classed('focusHov',function(d){
						return d.id === theory.id && d.topic === theory.topic;
					})
					.classed('semihov',false)
					;
			}

			function theoryUnfocus(){

				clearTimeout(self.fadeInTimeout);

				self.theoryFocus = null;

				t_nodes.classed('semihov',false);
				t_labelsG.classed('semihov',false);

				theoryUnlock();
			}

			function theoryLock(_t,_showDescrip){
				
				var theory = _t;

				theory.count = theory.WP ? theory.WP.count : 0;
				theory.voted = theory.WP ? theory.WP.voted : false;

				descrip = typeof(theory.description) === 'object' ? theory.description_HTML[theory.topic] : theory.description_HTML;

				if(_showDescrip){

					self.t_hBox
						.style('display',function(d){
							return self.topicFocus && theory.topic === self.topicFocus ? 'block' : 'none';
						})
						//.html('<div class="descrip t_name">' +theory.name +'</div><div class="descrip t_vote '+(theory.voted ? 'voted' : '') +'">&nbsp;' +theory.count +'</div>' +'<div class="descrip t_body">' +descrip +'</div>')
						.style('opacity',1);
					self.t_hBoxName
						.html(function(d){
							return theory.name;
						});
					self.t_hBoxVote
						.classed('voted',function(d){
							return theory.voted;
						})
						.html(function(d){
							return ' ' +theory.count +' votes';
						});
					self.t_hBoxBody
						.html(function(d){
							return descrip;
						});
				}
				
				t_nodes
					/*.each(function(d){
						d.fixed = d.id === theory.id && self.topicFocus && d.topic === self.topicFocus;
					})*/
					.classed('hov',function(d){
						return d.id === theory.id && d.topic === theory.topic;
					})
					.classed('unhov',function(d){
						return d.id !== theory.id || d.topic !== theory.topic;
					})
					.classed('subhov',function(d){
						var show = 
						(		(theory.t_children.indexOf(d) >-1)
							||	(theory.t_parents.indexOf(d) >-1)
							||	(theory.t_siblings.indexOf(d) >-1)
						);
						return show;
					})
					.classed('semihov',false)
					;
				t_links
					.classed('show',function(d){
						return 	(d.source.id === theory.id && d.source.topic === theory.topic) 
						|| 		(d.target.id === theory.id && d.target.topic === theory.topic);
					});
				t_labelsG
					.classed('show',function(d){
						var show = 
						(		(theory.t_children.indexOf(d) >-1)
							||	(theory.t_parents.indexOf(d) >-1)
							||	(theory.t_siblings.indexOf(d) >-1)
						);
						return show;
					})
					.classed('focusHov',function(d){
						return d.id === theory.id && d.topic === theory.topic;
					})
					.classed('semihov',false);
			}

			function theoryUnlock(){

				self.theoryFocus = null;

				//remove description box
				self.t_hBox
					//.html('')
					.transition()
					.duration(0)
					.style('opacity',0)
					.style('display','none');
				self.t_hBoxName.html('');
				self.t_hBoxVote
					.html('')
					.classed('voted',false);
				self.t_hBoxBody.html('');

				t_nodes
					/*.each(function(d){
						d.fixed = false;
					})*/
					.classed('hov',false)
					.classed('unhov',false)
					.classed('subhov',false)
					.classed('spotlight',false)
					.attr('r',function(d){
						d.radius = t_rad;
						return d.radius;
					});
				t_links.classed('show',false);
				t_labelsG
					.classed('hov',false)
					.classed('show',false)
					.classed('focusHov',false);
			}

			//record user's vote
			function theoryVote(_t,_this){

				if(_t.WP && _t.WP.slug){
					var new_vote = voting.vote(_t.WP.slug);

					d3.select(_this)
						.classed('voted',function(d){ return new_vote == 1; })
						.html(function(d){
							var current_value = parseInt(_this.innerHTML.split(' ')[1]);
							return ' ' +(current_value +new_vote +' votes');	
						});
				}
			}

			//tweet an endorsement
			function theoryTweet(_t){
				var body = "I endorse the '" +_t.name +"' theory! Cast your vote:",
					form = 'text=' +self.encode(body),
					link = 'url=' +self.encode('http://www.quantamagazine.org/?p=17950'),
					hand = 'via=QuantaMagazine',
					twit = 'https://twitter.com/intent/tweet?' +form +'&' +link +'&' +hand;
				//window.top.location.href = twit;
				window.open(twit,'_blank');
			}

			//bring up theory index screen
			function showIdxBox(){
				self.idxVisible = true;
				self.idxBox.classed('show',true);
				self.idx.classed('on',true);
			}

			function hideIdxBox(){
				self.idxVisible = false;
				self.idxBox.classed('show',false);
				self.idx.classed('on',false);
			}

			//return closest hull to x,y coords
			function getClosest(_x,_y){
				var distances = [],
					factor = self.topicFocus ? self.topicTransformDist.zoom : 1;
				force.nodes().forEach(function(d){
					distances.push({
						"id":d.id,
						"distance":Math.sqrt((_x -d.x*factor)*(_x -d.x*factor) + (_y -d.y*factor)*(_y -d.y*factor))
					});
				});
				return distances.sort(function(a,b){ return a.distance -b.distance;})[0];
			}

			//return closest node to x/y coords
			function getClosestTheory(_x,_y,_topic){
				var distances = [],
					factor = self.topicFocus ? self.topicTransformDist.zoom : 1;
				t_force.nodes().forEach(function(d){
					d.distance = Math.sqrt((_x -d.x*factor)*(_x -d.x*factor) + (_y -d.y*factor)*(_y -d.y*factor));
					if(!_topic || (_topic && d.topic === _topic)){
						distances.push(d);
					}
				});
				return distances.sort(function(a,b){ return a.distance -b.distance;})[0];
			}

			//for theories: curved links (http://bl.ocks.org/mbostock/1153292)
			function linkArc(d) {
				var src_x = d.source.x,
					src_y = d.source.y,
					tar_x = d.target.x,
					tar_y = d.target.y,

			  		dx = tar_x - src_x,
			      	dy = tar_y - src_y,
			      	dr = Math.sqrt(dx * dx + dy * dy);
				return "M" + src_x + "," + src_y + "A" + dr + "," + dr + " 0 0,1 " + tar_x + "," + tar_y;
			}

			//prevent fisheye warping from mushing the visualization off-screen
			function get_boundedPoint(_x,_y,_rad){
				var obj = {},
					ctr = {'x':self.w/2,'y':self.h/2},
					rad = _rad || self.h*0.95/2,
					hyp,
					ang,

					diff_x = _x -ctr.x,
					diff_y = _y -ctr.y;
				rad = rad -30; //this accounts for buffer radius
				hyp = Math.sqrt((diff_x * diff_x) + (diff_y * diff_y));
				ang = Math.atan2(diff_y,diff_x);

				obj.x = hyp >=rad ? ctr.x +Math.cos(ang)*rad : _x;
				obj.y = hyp >=rad ? ctr.y +Math.sin(ang)*rad : _y;
				return obj;
			}

			function get_buffer(_arr,_rad,_x,_y){
				var wedge = Math.PI/24;
				for(var i=wedge; i<(Math.PI*2); i +=wedge){
					_arr.push([(_x +Math.cos(i)*_rad),(_y +Math.sin(i)*_rad)]);
				}
				return _arr;
			}

			function update_link(){

				this.attr('d',function(d){
					var arr = [],
						src = {},
						tar = {};

					d.source.fisheye = fisheye(d.source);
					d.target.fisheye = fisheye(d.target);
					
					src = get_boundedPoint(d.source.fisheye.x,d.source.fisheye.y);
					tar = get_boundedPoint(d.target.fisheye.x,d.target.fisheye.y);

					arr.push({
						'x':src.x,
						'y':src.y
					},{
						'x':tar.x,
						'y':tar.y
					})
					return line_linear(arr);						
				});
			}

			function update_hull(){

				this.attr('d',function(d){

					var pts = [],
						pt0 = {},
						pt1 = {},
						ctr = {'x':self.w/2,'y':self.h/2};
					var path;
			
					//add to interpolate array: focus topic points
					pts.push([d.x,d.y]);

					//add to interpolate array: points for every incoming/outgoing link
					links.each(function(_d){
						if(_d.source === d || _d.target === d){ 
							var src = d.id === _d.source.id,
								dist = _d.value,
								l = this.getTotalLength(),
								p;
								//p = src ? this.getPointAtLength(l/2 +dist +d.size_scaled) : this.getPointAtLength(l/2 -dist -d.size_scaled);

							if(_d.source.id === 'quantGrav' && _d.target.id === 'hierProb'){
								p = this.getPointAtLength(l/2);
							} else if(_d.source.id === 'grandU' && _d.target.id === 'neutrinoMass'){
								p = this.getPointAtLength(l/2);
							} else if(_d.source.id === 'strongCP' && _d.target.id === 'matterAnti'){
								p = src ? this.getPointAtLength(l/3) : this.getPointAtLength(l/2);
							} else if(_d.source.id === 'hierProb' && _d.target.id === 'strongCP'){
								p = src ? this.getPointAtLength(2*l/3) : this.getPointAtLength(5*l/6);
							} else if(_d.source.id === 'cosConst' && _d.target.id === 'darkEnergy'){
								p = this.getPointAtLength(l/3);
							} else{
								p = src ? this.getPointAtLength((d.size_scaled/30)*l +dist) : this.getPointAtLength(l -(d.size_scaled/30)*l -dist);
							}

							pts.push([p.x,p.y]);
							get_buffer(pts,36,p.x,p.y);
						}
					});

					var ang = Math.atan2( (d.y -ctr.y),(d.x -ctr.x) );
					var rad = 36;

					//create circular buffer
					pts = get_buffer(pts,rad,d.x,d.y);

					//calculate hulls from array of arrays
					return "M" +d3.geom.hull(pts).join("L") +"Z";
				});
			}

			function update_label(){
				this
					.attr('transform',function(d){
						var pad = 0,
							x = self.topics[d].fisheye.x <self.w/2 ? self.topics[d].fisheye.x -pad : self.topics[d].fisheye.x +pad,
							y = self.topics[d].fisheye.y,
							p = get_boundedPoint(x,y);
						return 'translate(' +p.x +',' +p.y +')';
					})
					.style('text-anchor',function(d){
						return self.topicFocus ? 'middle' : self.topics[d].x <self.w/2 ? 'end' : 'start';
					});
			}

			//keep nodes inside their accordant hulls
			function gravity(alpha) {
				return function(d){

					var pad = 2,
						ctr = {},

						factor,

						radius,
						buffer,
						dist_x,
						dist_y,
						dist_h;

					ctr.x = d.focus.x || self.topics[d.topic].x;
					ctr.y = d.focus.y || self.topics[d.topic].y;

					if(!(self.topicFocus && d.topic === self.topicFocus)){
						radius = t_rad;
						buffer = 36 -12 -pad;//self.topicFocus && d.topic === self.topicFocus ? 36 : 36 -12 -pad;
						factor = 1;

						dist_x = Math.abs(ctr.x -d.x);
						dist_y = Math.abs(ctr.y -d.y);
						dist_h = Math.sqrt((dist_x*dist_x) +(dist_y*dist_y));

						if(dist_h >=buffer){
							d.x = d.x >ctr.x ? d.x -radius : d.x +radius;
							d.y = d.y >ctr.y ? d.y -radius : d.y +radius;
							d.speed = d.speed *-1;
						}
						d.x += (d.speed/factor) *alpha;
						d.y += -(d.speed/factor) *alpha;
					} else{
						var goal = {},
							hull = d3.select('.hull.' +d.topic).node().getBBox(),
							idx = self.topics[self.topicFocus].theories.indexOf(d.id),
							pad = 18;
						goal.x = ctr.x -(hull.width/6);
						goal.y = (ctr.y -(self.topics[self.topicFocus].theories.length *pad)/2) +pad*idx;

						d.y += (goal.y - d.y) *alpha*0.1;
						d.x += (goal.x - d.x) *alpha*0.1;
					}
				};
			}

			//resolve collisions (http://bl.ocks.org/mbostock/1804919)
			function collide(alpha) {

				var quadtree = d3.geom.quadtree(self.t_nodes);
				return function(d){
					if(!(self.topicFocus && d.topic === self.topicFocus)){
						var //r = self.topicFocus ? d.topic === self.topicFocus ? /*c_rad +t_pad*/ 18 : t_rad : t_rad +t_pad,
							r = t_rad +t_pad,
							nx1 = d.x -r,
							nx2 = d.x +r,
							ny1 = d.y -r,
							ny2 = d.y +r;
						quadtree.visit(function(quad,x1,y1,x2,y2){
							if(quad.point && (quad.point !==d)){
								var x = d.x -quad.point.x,
									y = d.y -quad.point.y,
									l = Math.sqrt(x*x +y*y),
									r = t_rad +t_pad;
									//r = self.topicFocus ? d.topic === self.topicFocus ? c_rad +t_pad : t_rad : t_rad +t_pad;
								if(l <r){
									l = (l -r)/l*alpha;
									d.x -= x *= l;
									d.y -= y *= l;
									quad.point.x += x;
									quad.point.y += y;
								}
							}
							return x1 >nx2 || x2 <nx1 || y1 >ny2 || y2 <ny1;
						});
					}
				}
			}

			function tick(e){
				links.call(update_link);
				hulls.call(update_hull);
				labelsG.call(update_label);
			}

			function t_tick(e){

				//keep the theory simulation running
				t_force.alpha(0.1);

				//THEORIES LOGIC
				t_nodes
					.each(gravity(e.alpha))
					.each(collide(0.5))
					.attr('cx',function(d){
						return d.x;
					})
					.attr('cy',function(d){
						return d.y;
					});

				t_links
					.attr('d',function(d){
						return linkArc(d);
					});

				t_labelsG
					.classed('visible',function(d){
						return self.topicFocus && d.topic === self.topicFocus;
					})
					.attr('transform',function(d){
						return 'translate(' +d.x +',' +d.y +')';
					})
					/*.style('text-anchor',function(d){
						return d.x <(d.focus.x || self.topics[d.topic].x) ? 'end' : 'start';
					})*/
					;
				/*t_labels
					.attr('x',function(d){
						return d.x <(d.focus.x || self.topics[d.topic].x) ? -9 : 9;
					});*/
			}
		},
		fullScreenMode:function(){
			var self = vis;

			//thanks, http://www.sitepoint.com/use-html5-full-screen-api/
			//is full screen available?
			if 	((
				document.fullscreenEnabled || 
			    document.webkitFullscreenEnabled || 
			    document.mozFullScreenEnabled ||
			    document.msFullscreenEnabled) &&
			    self.fsMode === false
			) 	{

				self.fsMode = true;
				self.fullScreen.classed('act',true);

				//grab visualization div
				var elem = document.getElementById('vis');

				// go full-screen
				if (elem.requestFullscreen) {
				    elem.requestFullscreen();
				} else if (elem.webkitRequestFullscreen) {
				    elem.webkitRequestFullscreen();
				} else if (elem.mozRequestFullScreen) {
				    elem.mozRequestFullScreen();
				} else if (elem.msRequestFullscreen) {
				    elem.msRequestFullscreen();
				}
			}

			else if(self.fsMode === true){

				self.fsMode = false;
				self.fullScreen.classed('act',false);

				// exit full-screen
				if (document.exitFullscreen) {
				    document.exitFullscreen();
				} else if (document.webkitExitFullscreen) {
				    document.webkitExitFullscreen();
				} else if (document.mozCancelFullScreen) {
				    document.mozCancelFullScreen();
				} else if (document.msExitFullscreen) {
				    document.msExitFullscreen();
				}

				self.idxVisible = false;
				self.idxBox.classed('show',false);
				self.idx.classed('on',false);
			}
		},
		encode:function(_text){
			var self = this;
			var text = encodeURIComponent(_text).replace(/'/g,"%27").replace(/"/g,"%22");
			return text;
		}
	}
}

var vis = init();
vis.generate();

$(window).resize(function(){
	vis.size();
});

$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(){

	var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;

	//if exiting fullscreen
	if (!fullscreenElement) {
		vis.fsMode = false;
		vis.fullScreen.classed('act',false);

		vis.idxVisible = false;
		vis.idxBox.classed('show',false);
		vis.idx.classed('on',false);
    }
});

d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};