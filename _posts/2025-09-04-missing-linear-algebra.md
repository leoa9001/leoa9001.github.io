---
layout: post
title: The Missing Linear Algebra for Pure Mathematics Course
date: 2025-09-04 
description: Talking about how we never cover linear algebra in the language it is used in high level pure mathematics. 
tags: math math-education 
categories:
related_posts: false
published: true
---

Linear algebra is perhaps the most important field in mathematics (pure and applied). Much of the game of mathematics is reducing your problem to some linear algebra - likely a system of equations - and then solving it there. Entire subfields of mathematics could be characterized as generalizations of linear algebra concepts: Representation theory generalizes eigenspace decomposition, homological algebra generalizes the rank-nullity theorem, functional analysis is characterized as infinite-dimensional linear algebra. Considering all this, motivating a new treatise on the subject isn't hard at all. However, claiming that the entire literature is missing a linear algebra treatment fit for pure mathematics is harder. 

The two canonical treatments of linear algebra are typified by Gilbert Strang's [18.06](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/) on MIT OCW, and Sheldon Axler's [Linear Algebra Done Right](https://linear.axler.net/) textbook. Strang's treatment looks like most treatment of linear algebra. It works entirely in coordinates dealing with operations on row/column vectors and matrices. Axler's treatment introduces abstract vector spaces and linear maps. Both work over fields $F = \mathbb{R}, \mathbb{C}$. 

One might think that this is a pretty complete treatment. Strang's represents the treatment given to all STEM students with a more applied flavor. Axler's is the more abstract treatment that only the pure math students get. However, as a pure math student who learned from both Strang's and Axler's approaches, I was continually struck by how different linear algebra was in higher level courses. I would have to pick up tidbits like working over finite fields, $\mathop{Hom}(V,W)\simeq V^\ast\otimes W$, and trace being the composition $\mathop{Hom}(V,V)\simeq V^\ast\otimes V \xrightarrow{\mathop{ev}} F$. 
