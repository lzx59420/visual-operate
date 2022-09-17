## 开发规范

1、ts：每一个变量必须定义类型，避免出现any类型<br/>
2、css：采用sass进行css代码编写<br/>
3、单个文件代码尽量不要超过300行<br/>
4、高内聚低耦合，避免出现组件之间的强绑定<br/>
5、组件使用大驼峰命名规则<br/>

## 提交代码规范

### github commit 应该包含四个信息:

type(scope): subject body<br/>
type（必需）、scope（可选）和subject（必需）、body (可选issues编号)<br/>

示例： fix(useToNumber): update function #1000<br/>

**常用type值:**<br/>
`feat`: 新功能 <br/>
`fix`: 修复bug  <br/>
`docs`: 文档改变<br/>
`style`: 代码格式改变<br/>
`refactor`: 某个已有功能重构<br/>
`perf`: 性能优化<br/>
`test`: 增加测试/测试用例<br/>
`revert`: 撤销上一次的 commit <br/>
`chore`: 改变构建流程、或者增加依赖库、工具等<br/>
`init`: 新建库<br/>
`build`: 改变了build工具 如 grunt换成了 npm<br/>
