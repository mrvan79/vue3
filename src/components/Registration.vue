  <template>
    <div class="tabs-container">
      <button class="tab-btn" @click="currentTab = 'MemberRegistration'" :class="{'active-tab': currentTab === 'MemberRegistration'}">会員登録</button>
      <div class="scorpion"></div>
      <button class="tab-btn" @click="currentTab = 'ContractRegistration'" :class="{'active-tab': currentTab === 'ContractRegistration'}">契約登録</button>
    </div>
      <div class="tab-contents" v-show="currentTab === 'MemberRegistration'">
        <MemberRegistration />
      </div>

      <div class="tab-contents" v-show="currentTab === 'ContractRegistration'">
        <ContractRegistration />
      </div>
  </template>

  <script>
import ContractRegistration from './ContractRegistration.vue';
import MemberRegistration from './MemberRegistration.vue';

  export default {
      name:'MemberContractRegistration',
      components : {MemberRegistration,ContractRegistration},
      data() {
      return {
        currentTab: 'ContractRegistration'
      };
    }
  }
  </script>

  <style>
  body{
    background: rgb(234, 253, 205);
    margin: 0;
    padding: 0;
  } 

  .tabs-container {
  display: flex;
  align-items: center; 
  justify-content: center; 
  gap: 0;
  }

  .tab-btn {
    width: 600px;
    height: 40px;
    clip-path: polygon(0 0, 88% 0, 100% 100%, 0% 100%);
    font-size: 1.5rem;
    font-weight: bold;
  }
  .scorpion{
    width: 30px;
    height: 40px;
    background: black;
  }
  .tab-btn:hover {
  cursor: pointer;
  opacity: 1;
  box-shadow: none; 
}
  .active-tab{
    background: rgb(184, 184, 184);
  }

  /* PC */
@media (min-width: 1024px) {
  body{
    width: 1600px;
    margin: 0 auto;
  }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  body{
    width: 1024px;
    margin: 0 auto;
  }
}

/* Smartphone */
@media (max-width: 767px) {
  body{
    margin: 0 auto;
  }
}

  </style>