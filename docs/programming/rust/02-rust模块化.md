# Rust 模块化

通过**模块化**来组织代码是一件非常基础且非常重要的事，因为通常不会将一个大型复杂系统的所有功能全部揉合到一个**源文件**中。当然，如果你非要这么做也不是不行，但这对于后续的维护者来说无疑是一种灾难。

## 概念

先了解一下Rust模块中的一些概念：

- ***WorkSpace***（工作空间）：可以将多个包聚合在一起，形成工作空间。

- ***Package***（项目）：一个完整的Rust项目工程，由一个或多个 Crate 所构建。
- ***Crate***（包）：Rust中的最小编译单元，也是 Package 的构建单元，由一个或多个 Modules 组成。
- ***Crate Root***：每一个 Crate 的编译入口文件，通常为`src/main.rs`或`src/lib.rs`。
- ***Binary Crate***：可以直接编译为可执行程序的 Crate。
- ***Library Crate***：可以被其他 Crate 作为依赖库的  Crate。
- ***Modules***（模块）：一个 Crate 下可以有多个模块，用于将代码进行划分，职责分明。
- **Path**（路径）：每个模块都具有自己的路径，通过路径来引用该模块。

## Package

**Package(包)**，表示一个完整的项目工程，可以包含一个或多个 **Crate**。

- 可以包含多个 **Library Crate**。
- 只能包含一个 **Binary Crate**。
- 至少得有一个 **Crate**。

每个Package都会有一个`Cargo.toml`配置文件，用于描述如何构建这些Crates。



## Crate

**Crate(块)** 是Rust的最小编译单元。它是是一个或多个 Module 的合集，以树形结构来维护Module。每个 Crate 都会有一个`Cargo.toml`配置文件，用于描述它的基本信息以及依赖项。

Crate 又分为两种形式：**Binary** 和 **Library**。

### Binary Crate

具有程序入口`main`函数，可以编译成可执行程序的 Crate。

Crate Root为`src/main.rs`。

当我们通过 `cargo new xxx` 创建项目时默认创建的就是 **Package**，并且由一个 **Binaray** 构建。

```bash
$ cargo new first_project

$ tree first_project
first_package
    ├── Cargo.toml
    └── src
        └── main.rs
```

### Library Crate

可以被 Package 或 其他Crate 所依赖共享的 Crate。

Crate Root为`src/lib.rs`。

如果需要创建一个 **Library Crate**，可以通过如下命令创建：

```bash
$ cargo new first_lib --lib

$ tree first_lib
first_lib
├── Cargo.toml
└── src
    └── lib.rs
```

## Modules

模块的主要作用是将代码划分为更小的管理单元。可以通过模块来管理代码的**作用域**以及**私有性**。

模块中定义的资源默认都是**私有的**：

```rust
mod user{
  mod enums{
    enum UserStatus{
      NORMAL,
      LOCKED,
    }
  }
}
```

访问权限如下几种：

- Default(默认)：私有。
- pub：公开访问的。
- pub(crate)：
- pub(super)：

```rust
pub mod user{
  pub mod enums{
    pub enum UserStatus{
      NORMAL,
      LOCKED,
    }
  }
}
```





### 模块的三种定义方式

####  1. 内联模块

直接在`lib.rs`中定义：

```rust
// lib.rs

pub mod user{
  pub mod entity{
    pub struct UserEntity{}
  }
}
```

#### 2.  文件模块

在`lib.rs`中定义模块名

```rust
pub mod user;
```

然后在`lib.rs`同级目录下创建与模块名相同的源文件`user.rs`：

```rust
// user.rs

pub mod entity{
    pub struct UserEntity{}
  }
```

#### 3. 目录模块

在`lib.rs`中定义模块名：

```rust
// lib.rs

pub mod user;
```

然后在`lib.rs`同级目录下创建与模块名相同的文件夹`user`，并且在该文件夹中创建`mod.rs`源文件：

```rust
// user/mod.rs

pub mod entity;
```

然后在`./user`目录中创建`entity.rs`源文件：

```rust
// user/entity.rs

pub struct UserEntity{}
```

## Path



## 标准Rust工程结构

```lua
.
├── Cargo.toml
├── Cargo.lock
├── src
│   ├── main.rs
│   ├── lib.rs
│   └── bin
│       └── main1.rs
│       └── main2.rs
├── tests
│   └── some_integration_tests.rs
├── benches
│   └── simple_bench.rs
└── examples
    └── simple_example.rs
```

