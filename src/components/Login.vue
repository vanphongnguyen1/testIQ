<script>
export default {};
</script>

<template>
  <div class="login">
    <div class="modal-login">
      <h1 class="modal-login__heading">Login Now</h1>

      <!-- <p class="valide-label modal-login__text-err">{dataError}</p> -->

      <form autoComplete="off">
        <input login type="email" name="email" />

        <input login type="password" name="password" />

        <div class="modal-login__box">
          <span class="modal-text">Forgot Password?</span>&nbsp;
          <a class="modal-text link-text"> Click here </a>
        </div>

        <div>
          <BtnLogin />
        </div>
      </form>

      <!-- <div class="modal-login__box">
          <span class="modal-text">Or Login with</span>
          <span class="box-icon">
            <span class="login-icon icon-facebook fab fa-facebook-f" />
            <span class="login-icon icon-google fab fa-google" />
          </span>
        </div> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: #ccc;

  background-image: url("https://source.unsplash.com/random/1600x900");
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  .modal-login {
    width: 45rem;
    background-color: rgba(#fff, 0.8);
    padding: 3rem 2rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;

    &__loading {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(#fff, 0.5);
    }

    &__heading {
      font-size: 2.4rem;
      text-align: center;
      color: #5b4bd3;
    }

    .mb-3 {
      margin-bottom: 3rem;
    }
    .mb-1 {
      margin-bottom: 1rem;
    }

    &__text-err {
      font-weight: 400;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    &__box {
      margin: 1rem 0;

      .modal-text {
        font-weight: 500;
        font-size: 1.5rem;
      }

      .link-text {
        color: #202c86;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          color: #13194a;
        }
      }
    }

    // .box-icon {
    //   margin-left: 1rem;
    //   display: inline-block;

    //   .login-icon {
    //     font-size: 2rem;
    //     color: #fff;
    //     width: 3.5rem;
    //     height: 3rem;

    //     line-height: 3rem;
    //     text-align: center;
    //     cursor: pointer;
    //   }

    //   .icon-facebook {
    //     background: #2f467b;
    //     transition: all .3s ease-in-out;

    //     &:hover {
    //       background: #13194a;
    //     }
    //   }

    //   .icon-google {
    //     background: #e84028;
    //     margin-left: 3px;
    //     transition: all .3s ease-in-out;

    //     &:hover {
    //       background: #94210f;
    //     }
    //   }
    // }
  }

  .box-input-identify {
    position: relative;

    &__icon {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);

      padding: 1.5rem;
      font-size: 1.7rem;
      color: #a0a1a9;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #4f3cc9;
      }
    }
  }
}
</style>
