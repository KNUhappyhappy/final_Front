const Editor = ({ placeholder, value, ...rest }) => {
  // quill 에디터 컴포넌트 ref
  const quillRef = useRef(null);

  // modules를 통해 핸들러를 추가해주는 방법과 toolbar를 선택해서 핸들러를 추가해주는 방법이 있다
  // const modules = {
  //   toolbar: {
  //     container: toolbarOptions,
  //     handlers: {
  //       image: handleImage
  //     }
  //   },
  // };

  useEffect(() => {
    const handleImage = () => {
      // 이미지 핸들 로직
    };

    if (quillRef.current) {
      const { getEditor } = quillRef.current;
      const toolbar = quillRef.current.getEditor().getModule("toolbar");
      toolbar.addHandler("image", handleImage);
    }
  }, []);

  return (
    <ReactQuill
      {...rest}
      ref={quillRef}
      value={value || ""}
      theme="snow"
      modules={{
        ...modules,
        imageResize: {
          parchment: Quill.import("parchment"),
          modules: ["Resize", "DisplaySize", "Toolbar"],
        },
      }}
      formats={formats}
      placeholder={placeholder}
      preserveWhitespace
    ></ReactQuill>
  );
};

export default Editor;
