<script setup lang="ts"></script>

<template>
  <div class="modal-list">
    <ul class="modal-list-menu">
      <li class="modal-list-item">
        <div class="radio-box">
          <input id="radio1" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label1" checked />
          <label id="label1" class="radio-box_name" for="radio1">
            <span class="r_circle" />
            날짜 최신순
          </label>
        </div>
      </li>
      <li class="modal-list-item">
        <div class="radio-box">
          <input id="radio2" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label2" />
          <label id="label2" class="radio-box_name" for="radio2">
            <span class="r_circle" />
            날짜 오래된순
          </label>
        </div>
      </li>
      <li class="modal-list-item">
        <div class="radio-box">
          <input id="radio3" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label3" checked />
          <label id="label3" class="radio-box_name" for="radio3">
            <span class="r_circle" />
            파일 이름 (내림차순)
          </label>
        </div>
      </li>
      <li class="modal-list-item">
        <div class="radio-box">
          <input id="radio4" type="radio" class="radio-box_btn" name="radio" aria-labelledby="label4" />
          <label id="label4" class="radio-box_name" for="radio4">
            <span class="r_circle" />
            파일 이름 (오름차순)
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>
