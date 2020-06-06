<template>
  <!-- Sidebar -->
  <nav id="sidebar" :class="{'active':inactivesidebar}">
    <!--  application heading tag -->
    <div class="sidebar-header">
      <h3 style="margin:0px">{{ $t('title') }}</h3>
    </div>
    <!-- static navigation bar -->
    <ul class="list-unstyled text-left">
      <li :class="{'active':$route.name=='ImportantTask'}">
        <router-link :to="{name:'ImportantTask'}">
          <i class="fa fa-bookmark mr-2 p-1"></i>
          {{$t('important')}}
        </router-link>
      </li>
      <li :class="{'active':$route.name=='PlannedTask'}">
        <router-link :to="{name:'PlannedTask'}">
          <i class="fa fa-calendar mr-2 p-1"></i>
          {{$t('planned')}}
        </router-link>
      </li>
      <li :class="{'active':$route.name=='GeneralTask'}">
        <router-link :to="{name:'GeneralTask'}">
          <i class="fa fa-tasks mr-2 p-1"></i>
          {{$t('tasks')}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ["inactivesidebar"],
  name: "Sidebar"
};
</script>
<style src="./sidebar.css" />