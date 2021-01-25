<template>
  <textarea ref="editor"></textarea>
</template>

<script>
import Simditor from "tar-simditor";
import "tar-simditor/styles/simditor.css";
import "tar-simditor-markdown";
import "tar-simditor-markdown/styles/simditor-markdown.css";
import "./simditor-file-upload";

export default {
  name: "Simditor",
  props: {
    toolbar: {
      type: Array,
      default: () => [
        "title",
        "bold",
        "italic",
        "underline",
        "fontScale",
        "color",
        "ol",
        "ul",
        "|",
        "link",
        "image",
        "uploadfile",
        "hr",
        "|",
        "indent",
        "outdent",
        "alignment",
        "|",
        "markdown"
      ]
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      editor: null,
      currentValue: this.value
    };
  },
  mounted() {
    Simditor.i18n['zh-CN']= {
      alignCenter: "가운데 정렬",
      alignLeft: "왼쪽 정렬 ",
      alignRight: "오른쪽 정렬",
      alignment: "정렬",
      blockquote: "인용",
      bold: "굵게",
      code: "코드",
      color: "글자색",
      coloredText: "Colored Text",
      deleteColumn: "Delete Column",
      deleteRow: "Delete Row",
      deleteTable: "Delete Table",
      externalImage: "External Image",
      fontScale: "폰트 크기",
      fontScaleLarge: "크게",
      fontScaleNormal: "기본",
      fontScaleSmall: "작게",
      fontScaleXLarge: "매우 크게",
      fontScaleXSmall: "매우 작게",
      hr: "수평선",
      image: "이미지 넣기",
      imageAlt: "Alt",
      imageSize: "크기",
      imageUrl: "Url",
      indent: "들여쓰기",
      insertColumnLeft: "Insert Column Left",
      insertColumnRight: "Insert Column Right",
      insertRowAbove: "Insert Row Above",
      insertRowBelow: "Insert Row Below",
      italic: "기울임꼴",
      link: "Insert Link",
      linkTarget: "Target",
      linkText: "Text",
      linkUrl: "Url",
      normalText: "Text",
      ol: "리스트(순서)",
      openLinkInCurrentWindow: "현재 창에서 열기 ",
      openLinkInNewWindow: "새창에서 열기",
      outdent: "들여쓰기",
      removeLink: "링크 삭제하기",
      restoreImageSize: "이미지 원래 사이즈로 돌리기",
      selectLanguage: "언어 선택",
      strikethrough: "취소선",
      table: "테이블",
      title: "제목",
      ul: "리스트(순서 X)",
      underline: "밑줄",
      uploadError: "업로드 하는 동안 문제가 발생하였습니다.",
      uploadFailed: "업로드에 실패하였습니다.",
      uploadImage: "이미지 업로드 ",
      uploading: "업로딩 중 "
    };

    // console.log(Simditor.i18n.en-US);
    // console.log( Simditor.i18n['en-US']);
    // Simditor.i18n = Simditor.i18n['en-US'];
    this.editor = new Simditor({
      textarea: this.$refs.editor,
      toolbar: this.toolbar,
      pasteImage: true,
      markdown: false,
      upload: {
        url: "/api/admin/upload_image/",
        params: null,
        fileKey: "image",
        connectionCount: 3,
        leaveConfirm: this.$i18n.t("m.Uploading_is_in_progress")
      },
      allowedStyles: {
        span: ["color"]
      }
    });
    console.log(this.editor);
    this.editor.on("valuechanged", (e, src) => {
      this.currentValue = this.editor.getValue();
    });
    this.editor.on("decorate", (e, src) => {
      this.currentValue = this.editor.getValue();
    });

    this.editor.setValue(this.value);
  },
  watch: {
    value(val) {
      if (this.currentValue !== val) {
        this.currentValue = val;
        this.editor.setValue(val);
      }
    },
    currentValue(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit("change", newVal);
        this.$emit("input", newVal);
      }
    }
  }
};
</script>

<style lang="less" scoped></style>
