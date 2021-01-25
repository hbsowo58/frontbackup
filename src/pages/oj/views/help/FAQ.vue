<template>
  <panel>
    <div slot="title">{{ $t("m.Frequently_Asked_Questions") }}</div>
    <div class="content markdown-body">
      <ul>
        <li>
          Java를 사용하실때 유의하실 점
          <p>Class 이름은 "Main" 으로 해야합니다. 또한, 소스코드에 package 선언을 제외하고 제출부탁드립니다.</p>
          <img src="@/assets/Java.png"/>
        </li>
        <li>
          C/C++ 제출하실 때 유의하실 점
          <p>int main으로 시작하고, return 0 코드를 넣어주세요.
            또한 scanf_s( ), strcpy_s( ) 와 같은 함수 사용은 금합니다. 이는 실제 코딩테스트 / 역량테스트에서도 같은 조건입니다.
</p>
          <div class="c-wrapper">
            <img src="@/assets/CLang.png"/>
            <img src="@/assets/C++Lang.png"/>
          </div>
        </li>
        <li>
          Visual Studio 에서 scanf_s 가 아닌, scanf 함수 사용 방법
        <p>
          프로젝트 생성후, 프로젝트 > 속성 > C/C++ > STL검사 에서 “아니오＂를 선택하시면 됩니다.
        </p>

        <div>
          <img src="@/assets/VisualStudio.png"/>
        </div>

        </li>
        <!--
          <li>{{$t('m.Where_is_the_input_and_the_output')}}
            <p>{{$t('m.Where_is_the_input_and_the_output_answer_part_1')}} <code>stdin</code> ('{{$t('m.Standard_Input')}}') {{$t('m.Where_is_the_input_and_the_output_answer_part_3')}} <code>stdout</code>
              ('{{$t('m.Standard_Output')}}') {{$t('m.Where_is_the_input_and_the_output_answer_part_5')}} <code>scanf</code> {{$t('m.Where_is_the_input_and_the_output_answer_part_6')}} <code>cin</code>
              {{$t('m.Where_is_the_input_and_the_output_answer_part_7')}} <code>printf</code> {{$t('m.Where_is_the_input_and_the_output_answer_part_8')}} <code>cout</code> {{$t('m.Where_is_the_input_and_the_output_answer_part_9')}} <code>{{$t('m.Runtime_Error')}}</code>.
            </p>
          </li>
          <li>{{$t('m.What_is_the_meaning_of_submission_execution_time')}}
          <p>{{$t('m.What_is_the_meaning_of_submission_execution_time_answer')}}
          </p>
          </li>
          <li>{{$t('m.How_Can_I_use_CPP_Int64')}}
            <p>{{$t('m.How_Can_I_use_CPP_Int64_answer_part_1')}}<code>long long</code> {{$t('m.How_Can_I_use_CPP_Int64_answer_part_2')}} <code>cin/cout</code> {{$t('m.or')}} <code>%lld</code>, {{$t('m.using')}}<code> __int64</code> {{$t('m.How_Can_I_use_CPP_Int64_answer_part_3')}} <code>{{$t('m.Compile_Error')}}</code>.</p>
          </li>
          <li>{{$t('m.Java_specifications')}}
            <p>{{$t('m.Java_specifications_answer_part_1')}} <code>Main</code> {{$t('m.Java_specifications_answer_part_2')}} <code>Main</code> {{$t('m.Java_specifications_answer_part_3')}}</p>
          </li>
          <li>{{$t('m.About_presentation_error')}}
            <p>{{$t('m.About_presentation_error_answer_part_1')}} <b>{{$t('m.last')}}</b> {{$t('m.About_presentation_error_answer_part_2')}} <code> {{$t('m.Wrong_Answer')}}</code>.</p>
          </li>
          <li>{{$t('m.How_to_report_bugs')}}
            <p>{{$t('m.How_to_report_bugs_answer_part_1')}} <a href="https://github.com/QingdaoU/OnlineJudge">Github</a>
              {{$t('m.How_to_report_bugs_answer_part_2')}}
            </p>
          </li>
        -->
      </ul>
    </div>
  </panel>
</template>

<script></script>

<style lang="less" scoped>
.content {
  font-size: 16px;
  margin: 0 50px 40px 50px;
  > ul {
    list-style: disc;
    li {
      font-size: 16px;
      margin-top: 20px;
      &:first-child {
        margin-top: 0;
      }
      p {
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
  .c-wrapper{
    margin-top: 40px;
    display: flex ;
    align-items: flex-start;
  }
  .c-wrapper img{
    display: inline-block;
    
  }
  .c-wrapper img:nth-of-type(2){
    margin-left: 50px;
  }
}
</style>
