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

$$
\def\ev{\mathrm{ev}}
\def\span#1{\operatorname{span}\{#1\}}
\def\Hom{\operatorname{Hom}}
$$

Linear algebra is perhaps the most important field in mathematics (pure and applied). Much of the game of mathematics is reducing your problem to some linear algebra - likely a system of equations - and then solving it there. Entire subfields of mathematics could be characterized as generalizations of linear algebra concepts: Representation theory generalizes eigenspace decomposition, homological algebra generalizes the rank-nullity theorem, functional analysis is characterized as infinite-dimensional linear algebra. Considering all this, motivating a new treatise on the subject isn't hard at all. However, claiming that the entire literature is missing a linear algebra treatment fit for pure mathematics is harder. 

The two canonical treatments of linear algebra are typified by Gilbert Strang's [18.06](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/) on MIT OCW, and Sheldon Axler's [Linear Algebra Done Right](https://linear.axler.net/) textbook. Strang's treatment looks like most treatment of linear algebra. It works entirely in coordinates dealing with operations on row/column vectors and matrices. Axler's treatment introduces abstract vector spaces and linear maps. Both work over fields $F = \mathbb{R}, \mathbb{C}$. 

One might think that this is *already* a sufficient treatment. Strang's course represents the treatment given to all STEM students with a more applied flavor. Axler's is the more abstract treatment that only the pure math students get. However, as a pure math student who learned from both Strang's and Axler's approaches, I was continually struck by how different linear algebra was in more advanced courses I took. I would have to pick up tidbits like working over finite fields, $\Hom (V,W)\simeq V^\ast\otimes W$, and trace being the composition $\Hom (V,V)\simeq V^\ast\otimes V \xrightarrow{\ev} F$. Constructions like the tensor product, symmetric product, and anti-symmetric product were also omitted. Similarly, what about tensor up restriction of scalars adjunction? 

Truthfully, the problem with Strang and Axler is that they did not teach linear algebra in the language that you see it in pure mathematics today. In Axler's introduction, he bills his book as a second treatment in linear algebra that "*will focus on abstract vector spaces and linear maps.*" The course I am picturing would focus on operations on vector spaces in a *category of vector spaces*. That is, it would take the dual role of being the **missing course on category theory** too. 

In this respect, one could think of this as the third and final treatment of linear algebra: First Strang, then Axler, and finally this one. This would reflect how I learned linear algebra. Though I would want the text to be self-contained, like the Strang and Axler are, and I would picture it being a good *second* treatment of linear algebra. It would be good to have seen it before, whether from something like Strang or Axler. 

## How the course (or book) would be different/structured

The typical linear algebra course looks like this:
- Coordinate focused: row/column vectors and matrices
- All vector spaces are finite-dimensional
- Base-field $F = \mathbb{R}$ or $\mathbb{C}$

This course would be rather different. First off

### The largely coordinate-free treatment

It may come as a surprise to some, but all of the following can be defined without reference to a row/column vector or matrix:

- Vectors, Vector Spaces
- Bases, Rank
- Transpose, Adjoint
- Upper Triangular Matrices/Diagonal matrices
- Symmetric/Anti-symmetric matrices
- Inner Products
- Trace
- Determinant
- Tensors
- Eigenvectors, eigenvalues, eigenspaces
- Jordan Canonical Form

Lets do a few examples now to illustrate: trace, transpose, upper triangular matrices, and Jordan Canonical form. 
