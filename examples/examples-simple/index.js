/*初始化水印*/
window.onload = function() {
  console.log('12');
  var aaa = new watermark({
    watermark_txt: '测试水印',
    watermark_size: '14px',
    watermark_width: 100,
    watermark_parent_node: 'watermark-parent1'
  });
  var bbb = new watermark({
    watermark_txt: '测试水印',
    watermark_width: 100,
    watermark_size: '14px',
    watermark_parent_node: 'watermark-parent2'
  });

  /*移除水印*/
  document.getElementById('remove-watermark').addEventListener(
    'click',
    function() {
      console.log('............');
      if (aaa) {
        aaa.remove();
        aaa = null;
      }
    },
    true
  );
  document.getElementById('remove-watermark2').addEventListener(
    'click',
    function() {
      console.log('............');
      if (bbb) {
        bbb.destroy();
        bbb = null;
      }
    },
    true
  );
  /*添加水印*/
  document.getElementById('add-watermark').addEventListener(
    'click',
    function() {
      if (!aaa && !bbb) {
        aaa = new watermark({
          watermark_txt: '测试水印，1021002301，测试水印，100101010111101',
          watermark_width: 200,
          watermark_parent_node: 'watermark-parent1'
        });

        bbb = new watermark({
          watermark_txt: '测试水印，1021002301，测试水印，100101010111101',
          watermark_width: 200,
          watermark_parent_node: 'watermark-parent2'
        });
      }
    },
    true
  );
  //   watermark.init({
  //     watermark_txt: '测试水印，1021002301，测试水印，100101010111101',
  //     watermark_width: 200,
  //     watermark_parent_node: 'watermark-parent2'
  //   });
};

// watermark.init({ watermark_txt: "测试水印，1021002301，测试水印，100101010111101" , watermark_width: 200});
