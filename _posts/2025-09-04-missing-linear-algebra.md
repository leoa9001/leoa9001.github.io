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

**Trace and Transpose**:

The trace was mentioned earlier: there are a canonical map $V^\ast\otimes V\rightarrow \Hom_k(V,V)$ and $V^\ast \otimes V\rightarrow k$. The first is given by sending a dual-vector, vector pair $\phi\otimes v$ to the linear map $w\mapsto \phi(w) v$, the latter by sending the pair $\phi\otimes v$ to $\phi(v)$. Doing the composition right one recovers the trace:
$$\text{tr}: \Hom_k(V,V)\rightarrow V^\ast \otimes V\rightarrow k$$ 

How about the transpose? Well the transpose is the functorial part of the dual vector. The dual-space is actually functorial. Given $V\xrightarrow{f} W$, one gets a map $W^\ast \xrightarrow{f^\ast} V^\ast$. If $W$ is finite-dimensional, we also have $W\simeq W^{\ast\ast}$ and using that isomorphism we know that $V^\ast\otimes W\simeq (W^\ast)^\ast\otimes V^\ast\simeq \Hom(W^\ast, V^\ast)$ and this isomorphism also yields the transpose. 

**Upper Triangular Matrices**: 

Suppose we have a linear map $f\in \Hom_k(V,V)$, how would we express that this map is upper-triangularizable without talking about the matrix of $f$? Well, what does it mean to be upper triangular in a conceptual way? If we have matrix of a linear map and it is upper triangular, we know that the left-most column is an entry with a bunch of zeroes. This means the vector $(1,0,0,\ldots,0)^t$ is sent to $(a,0,0,\ldots,0)^t$ - it is an eigenvector. Moreover, if we let $V_1 = \text{Span}_k((1,0,0,\ldots,0)^t)$, this subspace of $V$ is preserved by the linear map $f$. Similarly, we know that $\text{Span}_k ((1,0,\ldots)^t, (0,1,0,\ldots)^t)$ is preserved. Lets call this subspace $V_2$. We find that a map is upper-triangularizable if there exists a sequence of vector subspaces 

$$V_0\subset V_1\subset\cdots \subset V_n = V$$

such that $f$ preserves each $V_i$. Such a decomposition of a vector space is called a (complete) flag. 

**Jordan Canonical Form**

Ahhh I've talked enough - just trust me on this one. The short is that you can decompose your space into $\bigoplus V_{\lambda_i}$ wherein $f-\lambda_i$ restricts is nilpotent on each $V_{\lambda_i}$. If one takes the subring $k[f]\subset \Hom_k(V,V)$, the max-spectrum will correspond to the different $V_{\lambda_i}$s. 

