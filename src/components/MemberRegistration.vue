<template>
  <div class="MemberRegistration">
    <h4>
      ※入力タイムアウトを防止するため、この画面のみセッションを維持しています。入力が完了したら、遠やかに契約登録を行ってください。
    </h4>
    <h2 >会員登録</h2>
    <div class="form-row">
      <h2 class="member-group">会員氏名＊</h2>
      <div class="form-row">
        <div class="from-row-sub">
          <div class="form-group">
            <label for="sei">性</label>
            <input type="text" placeholder="えにし"/>
          </div>
          <div class="form-group">
            <label for="mei">名</label>
            <input type="text" placeholder="太郎"/>
          </div>
        </div>
        <div class="form-group mid-group">
          <label for="sei">ミッドネーム</label>
          <input type="text" placeholder="えどわーど"/>
        </div>
      </div>
    </div>

    <div class="form-row">
      <h2 class="member-group">会員フリガナ</h2>
      <div class="form-row">
        <div class="from-row-sub">
          <div class="form-group">
            <label for="sei">性</label>
            <input type="text" placeholder="エニシ"/>
          </div>
          <div class="form-group">
            <label for="mei">名</label>
            <input type="text" placeholder="タロウ"/>
          </div>
        </div>
        <div class="form-group mid-group">
          <label for="sei">ミッドネーム</label>
          <input type="text" placeholder="エドワート"/>
        </div>
      </div>
    </div>

    <div class="form-memberName">
      <label class="member-group">会員証氏名＊</label>
      <div  class="form-memberName-group">
        <input type="text" placeholder="エニシ太郎一段目"/>
        <div class="form-memberName-group-sub">
          <input type="text" placeholder="エニシ太郎二段目"/>
          <p>※二段目が入力された場合、一段目+二段目 で会員証に出力されます。</p>
        </div>
      </div>
    </div>

    <div class="form-memberName">
      <label class="member-group">会員証カナ＊</label>
      <div  class="form-memberName-group">
        <input type="text" placeholder="エニシ タロウ一ダンメ"/>
        <div class="form-memberName-group-sub">
          <input type="text" placeholder="エニシ タロウ一ダンメ"/>
          <p>※二段目が入力された場合、一段目+二段目 で会員証に出力されます。</p>
        </div>
      </div>
    </div>

    <div class="form-genderGroup">
      <h2 >性別＊</h2>
      <select class="gender" v-model="selectedGender" >
        <option v-for="gender in genderGroup" :key="gender.value" :selected="selectedGender" :value="gender.value">
          {{ gender.label }}
        </option>
      </select>
      <div class="from-dateOfBirth">  
        <h2 >生年月日＊</h2>
        <input type="date" @change="handleDateChange">
        <p style="width: 150px;">{{ displayDate  }}</p>
        <p>{{ age }}歳</p>
      </div>
    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue';


const genderGroup = [
  { label: '男性', value: 'male' },
  { label: '女性', value: 'female' },
  { label: 'Other', value: 'other' },
];

const selectedGender = ref(genderGroup[0].value);
const displayDate = ref('');
const age = ref(0);

const handleDateChange = (e) =>{
  const selectedDate = e.target.value;
  const date = new Date(selectedDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  //年齢計算
  const currentYear = new Date().getFullYear();
  age.value = currentYear - year;
  console.log(year)
  //対応する王朝に従って日付を表示します
  if (year >= 2019) { // Reiwa
    const reiwaYear = year - 2018;
    displayDate.value = `令和${reiwaYear}年${month}月${day}日`;
  } else if (year >= 1989) { // Heisei
    const heiseiYear = year - 1988;
    displayDate.value = `平成${heiseiYear}年${month}月${day}日`;
  } else if (year >= 1926) { // Shōwa
    const shōwaYear = year - 1926;
    displayDate.value = `昭和${shōwaYear}年${month}月${day}日`;
  } else {
    displayDate.value = '';
  }
}


</script>

<style scoped>
h4 {
  text-align: center;
}
.MemberRegistration {
  width: auto;
  height: auto;
  margin: auto;
  padding: auto;
}
.form-row {
  width: 100%;
  display: flex;
  gap: 30px;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
}
input[type="text"] {
  width: 100%;
  max-width: 454px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.from-row-sub {
  display: flex;
  gap: 30px;
}
.member-group{
  width: 12rem;
}

.form-memberName {
  display: flex;
  gap: 30px;
  width: 100%;
}

.form-memberName label{
  font-weight: bold;
  font-size: 1.6rem;
}

.form-memberName-group {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-memberName-group-sub {
  display: flex;
  align-items: center;
}

.form-genderGroup{
  display: flex;
  width: 100%;
  gap: 8rem;
}

.gender,.from-dateOfBirth input{
  max-height: 30px;
  width: 150px;
  margin-top: 20px;
  
}

.from-dateOfBirth{
  display: flex;
}

.from-dateOfBirth p{
  margin: 20px 0 0 5rem;
}




/* PC */
@media (min-width: 1024px) {
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
}

/* Smartphone */
@media (max-width: 767px) {
  .form-row {
    display: block;
  }
  .mid-group {
    margin-top: 20px;
  }
  .form-group input{
    width: 100%;  
  }
  .formSection{
    display: block;
  }
  .form-memberName{
    display: block;
    margin-top: 20px;
  }
  .form-memberName-group{
    margin-top: 20px;
  }
  .form-memberName-group-sub{
    display: block;
  }
  .form-genderGroup{
    display: block;
  }
}
</style>