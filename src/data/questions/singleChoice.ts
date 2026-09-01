import { ExamQuestion } from '../../types';

export const singleChoiceQuestions: ExamQuestion[] = [
  {
    id: 1,
    questionNumber: 1,
    type: '单选题',
    question: '以下哪项不属于 OceanBase 数据库内核暴露的管理接口？',
    options: [
      'A. OCP 管理控制台',
      'B. 内部系统表（如 __all_xxx）',
      'C. 内部系统视图（如 GV$xxx）',
      'D. 各种 DDL 管理命令'
    ],
    answer: 'A',
    analysis: 'OCP（OceanBase Cloud Platform）是独立的外部企业级管控平台，属于生态工具层，是管理接口的使用方，通过 SQL、系统表、系统视图等内核暴露的标准接口下发指令，本身不属于数据库内核暴露的接口。',
    topicId: 'tools',
    tags: ['OCP', '内核接口', '管理工具']
  },
  {
    id: 2,
    questionNumber: 2,
    type: '单选题',
    question: '关于 OceanBase 的核心技术，以下说法错误的是（ ）',
    options: [
      'A. OceanBase 依赖分布式中间件实现了在单机数据库上的分布式访问和事务处理。',
      'B. OceanBase 自研的高压缩技术平衡了“性能”和“压缩”的瓶颈，既能大幅压缩数据，减少磁盘空间占用，又不会造成较大的性能负担。',
      'C. OceanBase 分布式架构提供了极致高可用能力，在少数节点故障时可以保证数据零丢失（RPO=0），对业务的影响时间极短（RTO<8s）。',
      'D. OceanBase 支持 HTAP 混合负载，通过多租户的资源隔离来保证不同类型的租户间互不干扰，同时通过多副本技术让一份数据既能做事务处理又能实时分析。'
    ],
    answer: 'A',
    analysis: 'OceanBase 是原生分布式数据库（Native Distributed Database），采用 Shared-Nothing 架构自主研发，分布式事务、路由、分片与 Paxos 协议均在内核引擎层原生实现，绝不依赖分库分表中间件。',
    topicId: 'overview',
    tags: ['原生分布式', 'Shared-Nothing', '中间件区别']
  },
  {
    id: 3,
    questionNumber: 3,
    type: '单选题',
    question: '关于 OceanBase 的产品体系，以下说法错误的是（ ）',
    options: [
      'A. OMS 是 OceanBase 提供的数据同步工具，可以把其他数据库的数据同步到 OceanBase 数据库中。',
      'B. OMA 是 OceanBase 数据库提供的数据迁移与评估工具，可以实现一键式的数据库迁移。',
      'C. OCP 是 OceanBase 提供的云平台管理工具，可以将多个 OceanBase 集群统一纳管。',
      'D. OAS 是 OceanBase 提供的自治服务工具，可以提供自动化的优化建议和智能化的故障诊断能力。'
    ],
    answer: 'B',
    analysis: 'OMA（OceanBase Migration Assessment）是迁移评估工具，主要用于迁前兼容性评估与 SQL 改写建议，本身并不负责执行数据迁移。负责一站式全生命周期数据迁移与同步的工具是 OMS。',
    topicId: 'tools',
    tags: ['OMA', 'OMS', '工具矩阵']
  },
  {
    id: 4,
    questionNumber: 4,
    type: '单选题',
    question: '关于 OceanBase 的社区版和企业版，以下说法错误的是（ ）',
    options: [
      'A. 社区版不支持多租户',
      'B. 社区版不支持 Oracle 模式',
      'C. 社区版具有与企业版相同的内核，底层分布式架构相同',
      'D. 社区版支持原生的分布式事务'
    ],
    answer: 'A',
    analysis: '社区版与企业版同内核同架构，均原生支持多租户、LSM-Tree、Paxos 多数派共识与 2PC 原生分布式事务。主要区别在于：社区版仅支持 MySQL 兼容模式，不支持 Oracle 模式。',
    topicId: 'overview',
    tags: ['社区版', '企业版', '多租户', 'Oracle模式']
  },
  {
    id: 5,
    questionNumber: 5,
    type: '单选题',
    question: 'OceanBase 的 RootService（总控服务）不负责哪项工作？',
    options: [
      'A. 集群节点上下线与心跳管理',
      'B. 租户资源单元（Unit）与资源池调度',
      'C. 普通用户业务数据的持久化存储与加密',
      'D. 协调发起每日大合并（Major Compaction）'
    ],
    answer: 'C',
    analysis: 'RootService（RS）是运行在 sys 租户 Leader 节点上的逻辑总控服务，专职负责集群拓扑管理、资源调度、Schema/DDL 变更与负载均衡大合并调度，绝不存储和直接处理普通用户的业务数据。',
    topicId: 'architecture',
    tags: ['RootService', '总控服务', '集群调度']
  },
  {
    id: 6,
    questionNumber: 6,
    type: '单选题',
    question: 'OBServer 节点默认用于接收客户端/应用程序 SQL 请求的端口是？',
    options: ['A. 2881', 'B. 2882', 'C. 2883', 'D. 8080'],
    answer: 'A',
    analysis: 'OBServer 的 MySQL/Oracle SQL 监听端口为 2881；2882 为内部 RPC 通信端口；2883 为 OBProxy 代理监听端口；8080 为 OCP Web 控制台端口。',
    topicId: 'architecture',
    tags: ['2881端口', 'OBServer', '端口规范']
  },
  {
    id: 7,
    questionNumber: 7,
    type: '单选题',
    question: 'OBProxy（代理服务器）默认对外提供 SQL 代理服务的监听端口是？',
    options: ['A. 2881', 'B. 2882', 'C. 2883', 'D. 2884'],
    answer: 'C',
    analysis: 'OBProxy 默认监听业务 SQL 连接的端口为 2883，内部管理探针端口为 2884。',
    topicId: 'architecture',
    tags: ['2883端口', 'OBProxy', '代理端口']
  },
  {
    id: 8,
    questionNumber: 8,
    type: '单选题',
    question: '在 OceanBase 高可用架构中，当少数派（如 5 副本中的 2 台）OBServer 发生物理故障停机时，以下指标正确的是？',
    options: [
      'A. RPO = 0, RTO < 8 秒',
      'B. RPO < 8 秒, RTO = 0',
      'C. RPO > 0, RTO > 30 秒',
      'D. RPO = 0, RTO > 1 小时'
    ],
    answer: 'A',
    analysis: '基于 Multi-Paxos 多数派协议，多数派存活时数据绝对不丢（RPO=0），存活节点在秒级内（RTO<8s）完成自动选主并恢复正常读写。',
    topicId: 'ha',
    tags: ['RPO=0', 'RTO<8s', 'Paxos高可用']
  },
  {
    id: 9,
    questionNumber: 9,
    type: '单选题',
    question: '关于 OceanBase V4.x 的“日志流（Log Stream）”架构，以下说法正确的是？',
    options: [
      'A. 每一个数据表分区都必须独立维护一套 Paxos 复制组',
      'B. 数据分片（Tablet）与日志流是多对一（N:1）的关系，Paxos 选举以日志流为基本单位',
      'C. 一个 OBServer 节点只能拥有一个日志流',
      'D. 日志流不支持跨 Zone 复制'
    ],
    answer: 'B',
    analysis: 'OceanBase V4.x 引入日志流架构，将大量数据分片（Tablet）归属到数量收敛的日志流中，Paxos 同步与高可用切换以日志流为单位，单机可支撑百万级分片。',
    topicId: 'ha',
    tags: ['日志流', 'Log Stream', 'V4架构演进']
  },
  {
    id: 10,
    questionNumber: 10,
    type: '单选题',
    question: '关于 OceanBase 副本类型，哪种副本具有 Paxos 成员投票权且能当选为 Leader 提供读写服务？',
    options: [
      'A. 全功能型副本 (F 副本)',
      'B. 只读型副本 (R 副本)',
      'C. 日志型副本 (L 副本)',
      'D. 备用型副本 (B 副本)'
    ],
    answer: 'A',
    analysis: '全功能型副本（Full Replica / F 副本）拥有完整的数据（MemTable+SSTable）和事务日志（Clog），具备 Paxos 投票权，可被选举为 Leader 提供强读强写服务。',
    topicId: 'ha',
    tags: ['F副本', '全功能副本', '副本类型']
  },
  {
    id: 11,
    questionNumber: 11,
    type: '单选题',
    question: '关于 LSM-Tree 存储引擎中的“转储（Minor Compaction）”，以下说法正确的是？',
    options: [
      'A. 转储会彻底清除已删除的数据并物理回收磁盘空间',
      'B. 转储是将内存中冻结的 MemTable 刷入磁盘生成 SSTable，快速释放内存空间',
      'C. 转储操作必须在全集群所有节点完全同步执行',
      'D. 转储每天只能执行一次'
    ],
    answer: 'B',
    analysis: '转储（Minor Compaction）的核心目标是快速将冻结的 MemTable 刷盘生成 Minor SSTable 释放内存，不进行全局多路归并，不清理历史失效版本；彻底清理过期版本和删除标记是大合并（Major Compaction）的职责。',
    topicId: 'storage',
    tags: ['转储', 'Minor Compaction', 'MemTable刷盘']
  },
  {
    id: 12,
    questionNumber: 12,
    type: '单选题',
    question: 'OceanBase 每日大合并（Major Compaction）默认触发时间参数是？',
    options: [
      'A. major_freeze_duty_time',
      'B. minor_freeze_times',
      'C. compaction_schedule_hour',
      'D. auto_merge_interval'
    ],
    answer: 'A',
    analysis: '系统参数 major_freeze_duty_time 用于定义每天业务低峰期自动发起大合并的时间（如 "02:00"）。',
    topicId: 'storage',
    tags: ['major_freeze_duty_time', '大合并', '参数配置']
  },
  {
    id: 13,
    questionNumber: 13,
    type: '单选题',
    question: 'OceanBase 两级压缩体系中，第一级压缩采用的是？',
    options: [
      'A. 通用 Snappy 压缩算法',
      'B. 基于微块（Micro Block）内部数据特征自适应的高级编码（Encoding）',
      'C. GZIP 高压缩比算法',
      'D. 硬件卡加速解压'
    ],
    answer: 'B',
    analysis: '两级压缩体系：第一级是在微块内部根据列类型与数据分布自适应选择字典、前缀、差分等高级编码（支持在内存中不解压直接过滤计算）；第二级是通用压缩（LZ4/zstd）。',
    topicId: 'storage',
    tags: ['两级压缩', '高级编码', 'Micro Block']
  },
  {
    id: 14,
    questionNumber: 14,
    type: '单选题',
    question: '在 OceanBase 中执行 DELETE 删除一行数据时，底层的真实行为是？',
    options: [
      'A. 立即擦除磁盘 SSTable 上对应的数据块',
      'B. 在内存 MemTable 中写入一条墓碑标记（Tombstone / Delete Marker）',
      'C. 触发全量数据重新重写',
      'D. 将该行数据移入回收站数据库'
    ],
    answer: 'B',
    analysis: '由于磁盘基线 SSTable 只读不可变，DELETE 操作仅在内存 MemTable 写入带版本号的 Delete Marker（墓碑标记），只有在后续发生大合并时才会物理剔除并回收磁盘空间。',
    topicId: 'storage',
    tags: ['DELETE', 'Tombstone', '墓碑标记', '只读SSTable']
  },
  {
    id: 15,
    questionNumber: 15,
    type: '单选题',
    question: 'OceanBase 的两阶段提交（2PC）协议中，关于事务协调者的说法正确的是？',
    options: [
      'A. 协调者必须由集群的 RootService 担任',
      'B. 协调者是去中心化且无状态的（Stateless），自身不持久化 Paxos 日志',
      'C. 协调者一旦宕机，事务将永久挂起不可恢复',
      'D. 协调者必须由 OBProxy 代理充当'
    ],
    answer: 'B',
    analysis: 'OceanBase 实现了去中心化、无状态的两阶段提交：发起事务的日志流 Leader 充当协调者，协调者不记录额外 Paxos 日志，若协调者故障，新选举的协调者通过向参与者反向查询持久化状态即可推导决议。',
    topicId: 'transaction',
    tags: ['2PC', '协调者无状态', '分布式事务']
  },
  {
    id: 16,
    questionNumber: 16,
    type: '单选题',
    question: 'OceanBase 默认的事务隔离级别是？',
    options: [
      'A. 读未提交 (Read Uncommitted)',
      'B. 读已提交 (Read Committed)',
      'C. 可重复读 (Repeatable Read)',
      'D. 串行化 (Serializable)'
    ],
    answer: 'B',
    analysis: 'OceanBase 在 MySQL 模式和 Oracle 模式下的默认隔离级别均为读已提交（Read Committed）。不支持读未提交。',
    topicId: 'transaction',
    tags: ['隔离级别', 'Read Committed', '默认配置']
  },
  {
    id: 17,
    questionNumber: 17,
    type: '单选题',
    question: '使用表组（Tablegroup）的核心收益是？',
    options: [
      'A. 增加数据备份的分卷数量',
      'B. 将强关联表的分区聚集在相同物理节点，将分布式事务优化为本地事务',
      'C. 自动将单表转换为广播表',
      'D. 允许跨租户共享数据表'
    ],
    answer: 'B',
    analysis: 'Tablegroup 将业务强相关的表/分区的同号分区调度聚集在同一物理 OBServer（Colocation），避免 2PC 跨机分布式开销，实现高效的本地 Partition-Wise Join。',
    topicId: 'transaction',
    tags: ['Tablegroup', 'Colocation', '本地事务']
  },
  {
    id: 18,
    questionNumber: 18,
    type: '单选题',
    question: '某个租户配置在 3 个 Zone，每个 Zone 的 UNIT_NUM = 4，则该租户总共需要占用多少台 OBServer？',
    options: ['A. 4 台', 'B. 7 台', 'C. 12 台', 'D. 16 台'],
    answer: 'C',
    analysis: '租户所需服务器总数 = Zone 数量 × UNIT_NUM。3 × 4 = 12 台。单机单租户互斥分配 1 个 Unit。',
    topicId: 'tenant',
    tags: ['UNIT_NUM', '资源计算公式', '服务器计算']
  },
  {
    id: 19,
    questionNumber: 19,
    type: '单选题',
    question: '关于多租户资源隔离，以下哪种资源是严格独占分配、不支持超卖和跨租户借用的？',
    options: ['A. CPU 算力', 'B. 内存 (Memory)', 'C. 磁盘空间', 'D. 网络带宽'],
    answer: 'B',
    analysis: '内存（Memory）在 OceanBase 中是硬隔离独占分配，不可超卖，不支持跨租户借用；CPU 支持按配额池化超卖。',
    topicId: 'tenant',
    tags: ['内存硬隔离', '禁止超卖', '多租户']
  },
  {
    id: 20,
    questionNumber: 20,
    type: '单选题',
    question: '在 OceanBase V4.x 中，每个用户租户都会伴生一个私有元数据管理的租户，其命名格式为？',
    options: ['A. SYS$xxx', 'B. META$xxx', 'C. ADMIN$xxx', 'D. ROOT$xxx'],
    answer: 'B',
    analysis: 'V4.x 引入 Meta 租户机制，与每个用户租户 1:1 伴生，命名为 META$租户名，专职管理该租户的底层日志流与分片元数据。',
    topicId: 'tenant',
    tags: ['Meta租户', 'META$xxx', 'V4新特性']
  },
  {
    id: 21,
    questionNumber: 21,
    type: '单选题',
    question: '通过 OBProxy 连接 OceanBase 集群时，标准的用户登录名格式是？',
    options: [
      'A. 用户名@租户名',
      'B. 用户名@集群名#租户名',
      'C. 用户名@租户名#集群名',
      'D. 集群名.租户名.用户名'
    ],
    answer: 'C',
    analysis: '通过 OBProxy 连接的标准格式为：用户名@租户名#集群名（直连 OBServer 时格式为：用户名@租户名）。',
    topicId: 'tenant',
    tags: ['登录格式', 'OBProxy', '用户名@租户名#集群名']
  },
  {
    id: 22,
    questionNumber: 22,
    type: '单选题',
    question: '新建一个 OceanBase 业务租户的标准命令执行顺序是？',
    options: [
      'A. CREATE TENANT -> CREATE RESOURCE UNIT -> CREATE RESOURCE POOL',
      'B. CREATE RESOURCE UNIT -> CREATE RESOURCE POOL -> CREATE TENANT',
      'C. CREATE RESOURCE POOL -> CREATE RESOURCE UNIT -> CREATE TENANT',
      'D. CREATE TENANT -> CREATE DATABASE -> CREATE RESOURCE POOL'
    ],
    answer: 'B',
    analysis: '自下而上三步法：先定义资源规格（CREATE RESOURCE UNIT），再划定资源池（CREATE RESOURCE POOL），最后创建并绑定租户（CREATE TENANT）。',
    topicId: 'tenant',
    tags: ['租户创建流程', 'Resource Unit', 'Resource Pool']
  },
  {
    id: 23,
    questionNumber: 23,
    type: '单选题',
    question: 'OCP Agent 主机监控与运维代理中，负责周期性采集服务器与数据库性能指标的进程是？',
    options: ['A. ocp_agentd', 'B. ocp_mgragent', 'C. ocp_monagent', 'D. ocp_collector'],
    answer: 'C',
    analysis: 'ocp_monagent 是专门的监控采集进程（Monitor Agent）；ocp_agentd 为守护进程；ocp_mgragent 为运维指令管理执行进程。',
    topicId: 'tools',
    tags: ['OCP Agent', 'ocp_monagent', '监控进程']
  },
  {
    id: 24,
    questionNumber: 24,
    type: '单选题',
    question: '用于记录单次 SQL 执行的微秒级耗时、排队时间与等待事件的全局系统视图是？',
    options: ['A. GV$OB_SQL_AUDIT', 'B. GV$SQL_PLAN_MONITOR', 'C. GV$ACTIVE_SESSION_HISTORY', 'D. GV$OB_PARAMETERS'],
    answer: 'A',
    analysis: 'GV$OB_SQL_AUDIT 记录了每条 SQL 执行的详细画像（ELAPSED_TIME、QUEUE_TIME、CPU_TIME、EVENT 等）。出于合规安全，该视图不保存 SQL 结果集。',
    topicId: 'diagnostics',
    tags: ['GV$OB_SQL_AUDIT', 'SQL审计', '性能视图']
  },
  {
    id: 25,
    questionNumber: 25,
    type: '单选题',
    question: '在生产环境中部署 OceanBase，要求各节点之间的 RPC 时钟偏差最大不能超过？',
    options: ['A. 10ms', 'B. 50ms', 'C. 100ms', 'D. 500ms'],
    answer: 'C',
    analysis: 'OceanBase 前置检查强制要求各 OBServer 间 NTP/Chrony 时钟同步偏差 < 100ms，过大偏差会导致分布式事务 GTS 时间戳与租约异常。',
    topicId: 'architecture',
    tags: ['时钟偏差', '100ms', '部署要求']
  },
  {
    id: 26,
    questionNumber: 26,
    type: '单选题',
    question: '在生产环境中部署 OceanBase 时，关于 Linux 系统的 Swap 分区设置，官方要求是？',
    options: [
      'A. 必须配置至少 64GB Swap 分区',
      'B. 建议关闭 Swap 分区（swapoff 或 swappiness=0）',
      'C. 必须将 Swap 分区与 /data 盘合并',
      'D. Swap 大小必须等于物理内存大小'
    ],
    answer: 'B',
    analysis: '生产环境必须关闭 Swap（或设置 vm.swappiness=0），防止数据库内存页被换出至磁盘导致线程停顿与 Paxos 心跳超时误切主。',
    topicId: 'architecture',
    tags: ['Swap', '部署检查', '关闭Swap']
  },
  {
    id: 27,
    questionNumber: 27,
    type: '单选题',
    question: '用于记录全链路追踪（Full Link Trace）Span 信息的日志文件是？',
    options: ['A. observer.log', 'B. rootservice.log', 'C. trace.log', 'D. election.log'],
    answer: 'C',
    analysis: 'trace.log 专门记录 OceanBase 全链路追踪的 Span 耗时与组件调用链信息；election.log 记录选举日志；observer.log 为常规运行日志。',
    topicId: 'diagnostics',
    tags: ['trace.log', '全链路追踪', '日志矩阵']
  },
  {
    id: 28,
    questionNumber: 28,
    type: '单选题',
    question: '两地三中心架构（2同城 + 1异地），当同城一个机房发生整体断电时，集群的状态是？',
    options: [
      'A. 集群直接不可用',
      'B. 会丢失数分钟数据',
      'C. 存活副本仍满足多数派，数据零丢失 (RPO=0)，但强一致写延迟明显上升',
      'D. 异地副本自动转为只读'
    ],
    answer: 'C',
    analysis: '存活 1 同城 + 1 异地共 2 票，满足 3 副本的多数派要求，业务自动恢复且数据零丢失（RPO=0）；但因事务提交必须跨城网络同步，写延迟明显增大。',
    topicId: 'ha',
    tags: ['两地三中心', '机房断电', '延迟上升', 'RPO=0']
  },
  {
    id: 29,
    questionNumber: 29,
    type: '单选题',
    question: '关于 OceanBase 的 Flashback（闪回）查询，其语法关键字是？',
    options: ['A. BEFORE DROP', 'B. AS OF TIMESTAMP / AS OF SCN', 'C. RESTORE POINT', 'D. REVERT TO'],
    answer: 'B',
    analysis: '闪回查询（Flashback Query）利用 MVCC 多版本快照，通过 SELECT ... AS OF TIMESTAMP 或 AS OF SCN 直接读取历史指定时间点的数据。',
    topicId: 'diagnostics',
    tags: ['Flashback', 'AS OF TIMESTAMP', '闪回查询']
  },
  {
    id: 30,
    questionNumber: 30,
    type: '单选题',
    question: '通过 EXPLAIN 命令查看执行计划，若仅需要查看最精简的算子骨架与表名，应使用哪个选项？',
    options: ['A. EXPLAIN', 'B. EXPLAIN BASIC', 'C. EXPLAIN EXTENDED', 'D. EXPLAIN OUTLINE'],
    answer: 'B',
    analysis: 'EXPLAIN BASIC 输出最精简的计划树骨架；EXPLAIN 为默认标准计划；EXPLAIN EXTENDED 输出包含表达式内存地址与过滤条件的最详尽计划。',
    topicId: 'diagnostics',
    tags: ['EXPLAIN BASIC', '执行计划', '算子树']
  },
  {
    id: 31,
    questionNumber: 31,
    type: '单选题',
    question: '在 OceanBase 数据库中，用于缓存参数化 SQL 物理执行计划、避免重复硬解析的内存缓存是？',
    options: ['A. BlockCache', 'B. RowCache', 'C. Plan Cache', 'D. Schema Cache'],
    answer: 'C',
    analysis: 'Plan Cache（执行计划缓存）用于缓存参数化 SQL 的物理执行计划，避免高频 SQL 重复进行词法语法解析与代价估算（避免 Hard Parse）。',
    topicId: 'storage',
    tags: ['Plan Cache', '执行计划缓存', '硬解析']
  },
  {
    id: 32,
    questionNumber: 32,
    type: '单选题',
    question: '关于全局时间戳服务（GTS），以下描述正确的是？',
    options: [
      'A. GTS 依赖各节点的物理时钟严格一致',
      'B. GTS 为分布式事务提供单调递增的逻辑时间戳，作为全局快照读一致性基准',
      'C. GTS 由客户端本地生成',
      'D. GTS 仅在单机事务中使用'
    ],
    answer: 'B',
    analysis: '全局时间戳服务（Global Timestamp Service, GTS）由 sys 租户提供单调递增的时间戳，作为跨节点分布式事务的全局快照读基准。',
    topicId: 'transaction',
    tags: ['GTS', '全局时间戳', '快照读']
  },
  {
    id: 33,
    questionNumber: 33,
    type: '单选题',
    question: 'OceanBase 的事务日志盘（Clog）在磁盘规划时的最佳实践是？',
    options: [
      'A. 与操作系统 /root 共享磁盘',
      'B. 独立挂载在高性能 SSD/NVMe 磁盘（如 /data/log1）',
      'C. 挂载在慢速机械硬盘 (HDD)',
      'D. 存放在内存虚拟磁盘 (tmpfs)'
    ],
    answer: 'B',
    analysis: '事务日志（Clog）写入是事务提交的关键路径，对 I/O 延迟极度敏感，必须独立挂载在高性能 SSD/NVMe 磁盘。',
    topicId: 'architecture',
    tags: ['Clog', '事务日志盘', 'SSD挂载']
  },
  {
    id: 34,
    questionNumber: 34,
    type: '单选题',
    question: 'OceanBase 运行在 Linux 操作系统时，启动进程的系统用户必须是？',
    options: ['A. root 超级用户', 'B. admin 普通用户', 'C. oceanbase 用户', 'D. nobody 用户'],
    answer: 'B',
    analysis: '官方安全部署规范要求必须创建并使用普通用户 admin 运行 OBServer 及相关组件，严禁 root 直接运行。',
    topicId: 'architecture',
    tags: ['admin用户', '部署规范', '安全要求']
  },
  {
    id: 35,
    questionNumber: 35,
    type: '单选题',
    question: '关于日志型副本（L 副本），以下描述正确的是？',
    options: [
      'A. 包含完整的 SSTable 数据与 MemTable',
      'B. 仅包含事务日志（Clog），参与 Paxos 投票，不能当选为 Leader',
      'C. 不参与 Paxos 投票',
      'D. 可以直接提供强一致性读写服务'
    ],
    answer: 'B',
    analysis: '日志型副本（Log Replica / L 副本）不存储静态基线数据，仅同步并持久化 Clog 参与多数派仲裁投票，成本低，不可当选 Leader。',
    topicId: 'ha',
    tags: ['L副本', '日志型副本', '仲裁投票']
  },
  {
    id: 36,
    questionNumber: 36,
    type: '单选题',
    question: '关于只读型副本（R 副本），以下描述正确的是？',
    options: [
      'A. 具有 Paxos 成员投票权',
      'B. 异步回放日志，不参与 Paxos 投票，不影响写事务延迟，提供弱一致性读',
      'C. 可以直接承载强一致性写操作',
      'D. 宕机后会导致多数派仲裁失败'
    ],
    answer: 'B',
    analysis: '只读副本（Read-Only Replica / R 副本）包含完整数据但不参与 Paxos 多数派仲裁，异步回放日志，专门承载弱一致性只读业务。',
    topicId: 'ha',
    tags: ['R副本', '只读副本', '弱读']
  },
  {
    id: 37,
    questionNumber: 37,
    type: '单选题',
    question: 'OCP 默认的 Web 访问服务端口是？',
    options: ['A. 2881', 'B. 2883', 'C. 8080', 'D. 3306'],
    answer: 'C',
    analysis: 'OCP 控制台 Web 服务默认监听端口为 8080。',
    topicId: 'architecture',
    tags: ['8080端口', 'OCP', 'Web控制台']
  },
  {
    id: 38,
    questionNumber: 38,
    type: '单选题',
    question: '在 OceanBase 中，查看租户/集群系统参数的 SQL 命令是？',
    options: ['A. SHOW PARAMETERS;', 'B. SHOW VARIABLES;', 'C. SHOW CONFIGS;', 'D. SHOW SETTINGS;'],
    answer: 'A',
    analysis: 'SHOW PARAMETERS 用于查看系统参数（集群/租户级配置）；SHOW VARIABLES 用于查看会话或全局系统变量。',
    topicId: 'diagnostics',
    tags: ['SHOW PARAMETERS', '系统参数', '系统变量']
  },
  {
    id: 39,
    questionNumber: 39,
    type: '单选题',
    question: '如果用户建表时未显式指定主键，OceanBase 会如何处理？',
    options: [
      'A. 报错并拒绝创建表',
      'B. 自动生成隐藏自增主键列 __pk_increment 作为主键',
      'C. 随机选择第一列作为主键',
      'D. 默认采用堆表无序存储'
    ],
    answer: 'B',
    analysis: 'OceanBase 数据表默认按索引组织表存储，若未定义主键，系统会自动创建隐藏自增列 `__pk_increment` 作为隐藏主键。',
    topicId: 'transaction',
    tags: ['主键约束', '__pk_increment', '隐藏主键']
  },
  {
    id: 40,
    questionNumber: 40,
    type: '单选题',
    question: '关于 OceanBase 自动化安装部署工具 OBD（OceanBase Deployer），以下说法正确的是？',
    options: [
      'A. OBD 只能部署单机体验版，无法部署生产集群',
      'B. OBD 通过 YAML 配置文件，支持一键完成环境预检、组件部署与集群初始化',
      'C. OBD 是一个必须常驻运行的后台监控服务',
      'D. OBD 必须依赖图形化界面运行'
    ],
    answer: 'B',
    analysis: 'OBD 是专用的命令行安装部署工具，基于 YAML 配置文件自动化执行节点预检、软件分发、配置渲染与集群启动。',
    topicId: 'tools',
    tags: ['OBD', '自动化部署', 'YAML配置']
  },
  {
    id: 41,
    questionNumber: 41,
    type: '单选题',
    question: '关于 Primary Zone 的配置，若租户设置 PRIMARY_ZONE="zone1,zone2;zone3"，表示的含义是？',
    options: [
      'A. Leader 只能在 zone3 选举',
      'B. Leader 优先在 zone1 和 zone2 平均分布，当 zone1/zone2 均不可用时才切到 zone3',
      'C. zone1、zone2、zone3 随机均匀分布 Leader',
      'D. zone3 拥有最高的选主优先级'
    ],
    answer: 'B',
    analysis: '逗号（,）表示同等优先级（平均打散 Leader），分号（;）表示优先级递减。因此 zone1,zone2 优先级最高，zone3 为备选。',
    topicId: 'ha',
    tags: ['Primary Zone', 'Leader分布', '优先级配置']
  },
  {
    id: 42,
    questionNumber: 42,
    type: '单选题',
    question: 'ConfigServer（配置服务器）主要向哪个组件提供集群 RootService 节点列表与定位服务？',
    options: ['A. ODC', 'B. OCP', 'C. OMS', 'D. OBProxy'],
    answer: 'D',
    analysis: 'OBProxy 通过访问 ConfigServer（或配置 URL）拉取集群最新的 RS 节点列表，完成集群路由与元数据发现。',
    topicId: 'architecture',
    tags: ['ConfigServer', 'OBProxy', 'RS发现']
  },
  {
    id: 43,
    questionNumber: 43,
    type: '单选题',
    question: 'OceanBase 的 BlockCache 缓存的最小数据单元是？',
    options: ['A. 宏块 (Macro Block, 2MB)', 'B. 微块 (Micro Block, 16KB 左右)', 'C. 数据行 (Row)', 'D. 表分区 (Partition)'],
    answer: 'B',
    analysis: 'BlockCache 缓存的是 SSTable 中的微块（Micro Block，通常 16KB 左右）；宏块为 2MB 是磁盘连续写的基本单元；RowCache 缓存单个数据行。',
    topicId: 'storage',
    tags: ['BlockCache', 'Micro Block', '微块']
  },
  {
    id: 44,
    questionNumber: 44,
    type: '单选题',
    question: '当通过 SQL 命令将误删的表从回收站还原时，正确的 SQL 命令是？',
    options: [
      'A. RESTORE TABLE table_name;',
      'B. FLASHBACK TABLE table_name TO BEFORE DROP;',
      'C. RECOVER TABLE table_name;',
      'D. UNDROP TABLE table_name;'
    ],
    answer: 'B',
    analysis: '从回收站秒级闪回误删表的标准语法为：`FLASHBACK TABLE <table> TO BEFORE DROP;`。',
    topicId: 'diagnostics',
    tags: ['FLASHBACK TABLE', '回收站', 'Recyclebin']
  },
  {
    id: 45,
    questionNumber: 45,
    type: '单选题',
    question: '在两阶段提交中，当所有参与者完成 PREPARE 并投票 YES 后，进入第二阶段由协调者发送的命令是？',
    options: ['A. ROLLBACK', 'B. COMMIT', 'C. ABORT', 'D. END'],
    answer: 'B',
    analysis: '所有参与者均返回 PREPARE 成功后，协调者决议并向所有参与者下发 COMMIT 指令完成最终提交。',
    topicId: 'transaction',
    tags: ['2PC', 'COMMIT', '两阶段提交']
  },
  {
    id: 46,
    questionNumber: 46,
    type: '单选题',
    question: '关于 OceanBase 的多租户特性，系统租户（sys 租户）的权限描述正确的是？',
    options: [
      'A. sys 租户可以随意查看和修改普通用户租户中的业务数据表',
      'B. sys 租户负责全集群的资源调度、节点拓扑管理与系统参数调整，但出于安全隔离不随意篡改用户业务数据',
      'C. sys 租户不能创建其他租户',
      'D. 每个集群可以存在多个 sys 租户'
    ],
    answer: 'B',
    analysis: 'sys 租户是集群内置的管理租户，专职管理集群级元数据和资源池，但出于多租户安全与数据隐私保护，严格隔离普通业务租户的数据。',
    topicId: 'tenant',
    tags: ['sys租户', '系统租户', '数据安全']
  },
  {
    id: 47,
    questionNumber: 47,
    type: '单选题',
    question: '关于 OCP 的滚动升级（Rolling Upgrade）特性，其优势在于？',
    options: [
      'A. 必须全集群停机',
      'B. 按 Zone 逐个升级，利用 Paxos 自动切主实现业务不中断的平滑升级',
      'C. 只能升级操作系统，不能升级 OceanBase 内核',
      'D. 升级过程中禁止任何读操作'
    ],
    answer: 'B',
    analysis: 'OCP 支持按 Zone 滚动无感升级：先将当前 Zone 的 Leader 切走，再升级该 Zone 的 OBServer，利用 Paxos 多数派容灾保证业务读写不中断。',
    topicId: 'tools',
    tags: ['滚动升级', 'OCP', '零停机']
  },
  {
    id: 48,
    questionNumber: 48,
    type: '单选题',
    question: 'OceanBase 数据宏块（Macro Block）的标准大小是？',
    options: ['A. 16KB', 'B. 64KB', 'C. 2MB', 'D. 128MB'],
    answer: 'C',
    analysis: '宏块（Macro Block）是 OceanBase 磁盘 I/O 数据写入与分配的连续物理大块，固定大小为 2MB。微块（Micro Block）通常为 16KB。',
    topicId: 'storage',
    tags: ['宏块', 'Macro Block', '2MB']
  },
  {
    id: 49,
    questionNumber: 49,
    type: '单选题',
    question: '关于 OceanBase 读写分离机制，普通 SELECT 查询执行时的数据读取路径是？',
    options: [
      'A. 仅读取磁盘 SSTable',
      'B. 仅读取内存 MemTable',
      'C. 同时扫描磁盘只读基线 (SSTable) 和内存增量 (MemTable)，并在内存中实时多版本归并 (Merge on Read)',
      'D. 从事务日志 Clog 中直接读取'
    ],
    answer: 'C',
    analysis: '准内存 LSM-Tree 架构下，查询必须同时扫描基线 SSTable 与内存增量 MemTable，并在内存中进行实时归并（Merge on Read），确保读取到最新版本。',
    topicId: 'storage',
    tags: ['Merge on Read', 'MemTable', 'SSTable', '读写分离']
  },
  {
    id: 50,
    questionNumber: 50,
    type: '单选题',
    question: '下列关于 DBA 日常运维工作范畴的描述，不属于 DBA 日常职责的是？',
    options: [
      'A. 集群容量规划与租户资源扩缩容',
      'B. 数据库参数调优与大合并监控',
      'C. 针对业务需求重构和改写应用程序代码及复杂业务 SQL',
      'D. 定期备份验证与应急故障演练'
    ],
    answer: 'C',
    analysis: '重构和改写应用业务逻辑代码及 SQL 是应用开发工程师的职责，DBA 负责提供性能诊断、索引建议和系统层运维。',
    topicId: 'overview',
    tags: ['DBA职责', '业务SQL改写', '运维边界']
  },
  {
    id: 51,
    questionNumber: 51,
    type: '单选题',
    question: 'OceanBase 的 Zone 在物理部署上的本质是？',
    options: [
      'A. 一个 Zone 必须对应一个独立的物理城市',
      'B. Zone 是逻辑故障隔离域，通常映射为一个机房、机架或可用区',
      'C. 一个 Zone 只能部署一台 OBServer',
      'D. Zone 是操作系统层面的命名空间'
    ],
    answer: 'B',
    analysis: 'Zone 是逻辑概念，用于划定物理故障隔离域。部署时可根据机房、机架灵活划分，不强制绑定城市。',
    topicId: 'architecture',
    tags: ['Zone概念', '故障隔离域', '物理映射']
  },
  {
    id: 52,
    questionNumber: 52,
    type: '单选题',
    question: '在 5 副本（5 个 Zone）的集群架构中，最多允许同时宕机多少个节点而不影响正常强读强写？',
    options: ['A. 1 个', 'B. 2 个', 'C. 3 个', 'D. 4 个'],
    answer: 'B',
    analysis: 'N 副本集群最大允许故障节点数公式为 (N-1)/2。5 副本集群存活 3 节点即满足多数派，因此最多容忍 2 个节点同时故障。',
    topicId: 'ha',
    tags: ['多数派公式', '5副本容灾', '容错计算']
  },
  {
    id: 53,
    questionNumber: 53,
    type: '单选题',
    question: '关于 OMA（迁移评估工具）的主要输出内容，以下哪项正确？',
    options: [
      'A. 直接将源端数据插入目标端 OceanBase',
      'B. 输出对象兼容度评估报告、不兼容 SQL 列表及改写建议',
      'C. 自动生成反向同步通道',
      'D. 负责主备库切换'
    ],
    answer: 'B',
    analysis: 'OMA 专用于迁前静态与动态评估，输出兼容度百分比、不兼容对象清单与转换建议，不执行实际的数据搬迁。',
    topicId: 'tools',
    tags: ['OMA', '迁移评估', '兼容性报告']
  },
  {
    id: 54,
    questionNumber: 54,
    type: '单选题',
    question: '使用 LOAD DATA 命令直接导入某台 OBServer 本地服务端的文件时，客户端应如何连接？',
    options: [
      'A. 必须通过 OBProxy 连接',
      'B. 必须直连存放该文件的目标 OBServer 节点（2881 端口）',
      'C. 必须通过 OCP 页面导入',
      'D. 必须先将文件分发到所有 OBServer'
    ],
    answer: 'B',
    analysis: '服务端本地文件导入时，客户端必须直连该 OBServer，若通过 OBProxy 连接可能被转发至其他未挂载文件的节点导致找不到文件报错。',
    topicId: 'tools',
    tags: ['LOAD DATA', '直连OBServer', '2881']
  },
  {
    id: 55,
    questionNumber: 55,
    type: '单选题',
    question: 'ASH（Active Session History）和 WR 报告在故障诊断时的最大特点是？',
    options: [
      'A. 必须在问题发生时实时手工捕获',
      'B. 支持事后离线回溯与区间分析，无需故障现场抓取',
      'C. 只能分析网络延迟，无法分析 SQL 耗时',
      'D. 仅支持 Oracle 模式'
    ],
    answer: 'B',
    analysis: 'ASH/WR 在内核后台自动定时采样活跃会话与性能数据，事后可通过指定时间段生成离线报告回溯诊断瞬时瓶颈。',
    topicId: 'diagnostics',
    tags: ['ASH', 'WR', '离线回溯']
  },
  {
    id: 56,
    questionNumber: 56,
    type: '单选题',
    question: 'OceanBase 数据文件（如 block_file）所在的默认目录挂载点通常为？',
    options: ['A. /home/admin/oceanbase', 'B. /data/1', 'C. /tmp', 'D. /var/log'],
    answer: 'B',
    analysis: '数据基线盘通常挂载在 /data/1（包含预分配的 block_file 大文件）；事务日志盘挂载在 /data/log1。',
    topicId: 'architecture',
    tags: ['/data/1', 'block_file', '数据盘']
  },
  {
    id: 57,
    questionNumber: 57,
    type: '单选题',
    question: '关于 OceanBase 的 RowCache，其主要加速的场景是？',
    options: [
      'A. 大范围全表分析扫描',
      'B. 基于主键（Primary Key）或唯一键的高频单行点查',
      'C. 复杂多表 Hash Join',
      'D. 批量大合并写入'
    ],
    answer: 'B',
    analysis: 'RowCache 针对行级粒度进行内存缓存，对主键点查（Point Lookup）场景提供极高的命中率和极低时延。',
    topicId: 'storage',
    tags: ['RowCache', '主键点查', 'KVCache']
  },
  {
    id: 58,
    questionNumber: 58,
    type: '单选题',
    question: '关于表组（Tablegroup）的 SHARDING=\'PARTITION\' 规则，以下要求错误的是？',
    options: [
      'A. 表组内所有表必须有一致的一级分区方式（如全为 Range 分区）',
      'B. 表组内所有表的分区数量必须完全一致',
      'C. 表组内所有表的分区边界定义必须完全一致',
      'D. 表组可以跨多个租户共享使用'
    ],
    answer: 'D',
    analysis: 'Tablegroup 属于具体的某一个租户，严禁跨租户共享。SHARDING=\'PARTITION\' 要求同表组内表的一级分区方式、数量及边界完全一致。',
    topicId: 'transaction',
    tags: ['Tablegroup', 'SHARDING', '禁止跨租户']
  },
  {
    id: 59,
    questionNumber: 59,
    type: '单选题',
    question: '用于记录 Paxos 副本选举与切主事件的核心日志文件是？',
    options: ['A. observer.log', 'B. election.log', 'C. rootservice.log', 'D. trace.log'],
    answer: 'B',
    analysis: 'election.log 记录 Paxos 选主、Lease 租约更新与切主决策事件；rootservice.log 记录 RS 管理事件。',
    topicId: 'diagnostics',
    tags: ['election.log', 'Paxos选举', '切主日志']
  },
  {
    id: 60,
    questionNumber: 60,
    type: '单选题',
    question: '在 OceanBase 中，关于 CPU 资源隔离的配置参数，表示租户保底算力的是？',
    options: ['A. MIN_CPU', 'B. MAX_CPU', 'C. CPU_QUOTA', 'D. CPU_CAP'],
    answer: 'A',
    analysis: 'MIN_CPU 定义了租户获得的保底 CPU 核心数；MAX_CPU 定义了空闲时允许突发使用的算力上限。',
    topicId: 'tenant',
    tags: ['MIN_CPU', 'MAX_CPU', 'CPU隔离']
  },
  {
    id: 61,
    questionNumber: 61,
    type: '单选题',
    question: '当集群中某个租户的内存使用率达到 freeze_trigger_percentage（约 70%）时，系统会自动触发？',
    options: ['A. 紧急大合并 (Major Compaction)', 'B. 转储操作 (Minor Freeze / Dump)', 'C. 杀死慢查询会话', 'D. 拒绝所有连接'],
    answer: 'B',
    analysis: '内存达到阈值时自动触发转储（Minor Compaction），将内存冻结的 MemTable 刷写至磁盘生成 SSTable，释放内存。',
    topicId: 'storage',
    tags: ['freeze_trigger_percentage', '转储触发', 'MemTable']
  },
  {
    id: 62,
    questionNumber: 62,
    type: '单选题',
    question: '关于 ODC（开发者中心）支持的部署方式，以下说法正确的是？',
    options: [
      'A. 仅支持 Web 网页版',
      'B. 仅支持客户端桌面版',
      'C. 同时支持 Web 协同版与桌面客户端版',
      'D. 必须依赖 Docker 才能运行'
    ],
    answer: 'C',
    analysis: 'ODC 提供两种形态：Web 网页版（支持团队协同与权限管控）和 Desktop 独立桌面版（适合个人快速连接调试）。',
    topicId: 'tools',
    tags: ['ODC', 'Web版', '桌面版']
  },
  {
    id: 63,
    questionNumber: 63,
    type: '单选题',
    question: '在 OceanBase 中，负责收集慢 SQL 执行时算子级别耗时画像的动态监控视图是？',
    options: ['A. GV$OB_SQL_AUDIT', 'B. GV$SQL_PLAN_MONITOR', 'C. GV$OB_PARAMETERS', 'D. GV$OB_SERVERS'],
    answer: 'B',
    analysis: 'GV$SQL_PLAN_MONITOR 提供算子（Operator）级别的实时执行统计（如扫描行数、内存消耗、算子耗时），精确定位慢 SQL 卡在哪个具体节点。',
    topicId: 'diagnostics',
    tags: ['GV$SQL_PLAN_MONITOR', '算子监控', '慢SQL']
  },
  {
    id: 64,
    questionNumber: 64,
    type: '单选题',
    question: 'OceanBase 的事务多版本并发控制（MVCC）中，写操作加锁的粒度是？',
    options: ['A. 表级排他锁', 'B. 页级锁', 'C. 行级排他锁 (Row Exclusive Lock)', 'D. 分区级锁'],
    answer: 'C',
    analysis: 'OceanBase 写写冲突采用行级排他锁（Row Exclusive Lock），读写互不阻塞（读不加锁，直接读快照版本）。',
    topicId: 'transaction',
    tags: ['MVCC', '行级锁', '读写互不阻塞']
  },
  {
    id: 65,
    questionNumber: 65,
    type: '单选题',
    question: '下列关于 OceanBase 租户创建参数的说法，错误的是？',
    options: [
      'A. 必须指定 RESOURCE_POOL_LIST',
      'B. 可以指定 COMPATIBILITY_MODE 为 \'MYSQL\' 或 \'ORACLE\'',
      'C. 租户创建后兼容模式可以随时相互切换',
      'D. 可以指定 PRIMARY_ZONE 策略'
    ],
    answer: 'C',
    analysis: '租户的兼容模式（MySQL 模式 / Oracle 模式）在创建租户时确定，创建后严禁且无法修改切换。',
    topicId: 'tenant',
    tags: ['租户兼容模式', '不可修改', 'CREATE TENANT']
  },
  {
    id: 66,
    questionNumber: 66,
    type: '单选题',
    question: 'OceanBase 物理备份中，负责将数据写入到备份介质（如 NFS/OSS/COS）的执行节点是？',
    options: ['A. OBServer 节点自身分布式并发写入', 'B. 只能由 sys 租户的 RootService 节点单点写入', 'C. 只能由 OCP 单点代理中转', 'D. 只能由 OBProxy 写入'],
    answer: 'A',
    analysis: 'OceanBase 备份架构采用全分布式并发写入，各个 OBServer 节点直接将各自负责的数据分片与日志流并发写入远端备份存储介质。',
    topicId: 'ha',
    tags: ['物理备份', '分布式写入', '备份介质']
  },
  {
    id: 67,
    questionNumber: 67,
    type: '单选题',
    question: '关于 OceanBase 数据库的内存管理，下列哪项属于动态增量写入内存区？',
    options: ['A. MemTable', 'B. KVCache', 'C. Plan Cache', 'D. BlockCache'],
    answer: 'A',
    analysis: 'MemTable 是专用于接收所有 DML 增量写入的内存数据结构；KVCache/BlockCache/Plan Cache 均为只读缓存。',
    topicId: 'storage',
    tags: ['MemTable', '增量写入', '内存管理']
  },
  {
    id: 68,
    questionNumber: 68,
    type: '单选题',
    question: '在 MySQL 兼容模式下，支持且为 MySQL 专属的一级分区类型是？',
    options: ['A. Range 分区', 'B. List 分区', 'C. Hash 分区', 'D. Key 分区'],
    answer: 'D',
    analysis: 'Key 分区是 MySQL 模式专属的一级分区方式（基于 MySQL 内置 Hash 算法计算键值）。',
    topicId: 'transaction',
    tags: ['Key分区', 'MySQL模式', '分区类型']
  },
  {
    id: 69,
    questionNumber: 69,
    type: '单选题',
    question: '关于 OCP Agent 进程中的守护进程，其进程名称是？',
    options: ['A. ocp_agentd', 'B. ocp_daemon', 'C. ocp_watchdog', 'D. ocp_server'],
    answer: 'A',
    analysis: 'ocp_agentd 是 OCP Agent 的主守护进程，负责监控、启停和自愈 ocp_mgragent 与 ocp_monagent。',
    topicId: 'tools',
    tags: ['ocp_agentd', '守护进程', 'OCP Agent']
  },
  {
    id: 70,
    questionNumber: 70,
    type: '单选题',
    question: '在 OceanBase 中，记录 Warning 和 Fatal 级别告警日志的文件是？',
    options: ['A. observer.log', 'B. observer.log.wf', 'C. election.log', 'D. rootservice.log'],
    answer: 'B',
    analysis: 'observer.log.wf（Warning / Fatal）专门记录 Warning 及以上级别的关键告警日志，方便运维快速过滤错误。',
    topicId: 'diagnostics',
    tags: ['observer.log.wf', '告警日志', 'Warning/Fatal']
  },
  {
    id: 71,
    questionNumber: 71,
    type: '单选题',
    question: 'OceanBase 的全链路追踪功能通过哪个系统日志记录调用链路 Span？',
    options: ['A. trace.log', 'B. span.log', 'C. link.log', 'D. audit.log'],
    answer: 'A',
    analysis: 'trace.log 是全链路追踪专用的日志文件，记录跨组件调用的 TraceID 与 Span 耗时。',
    topicId: 'diagnostics',
    tags: ['trace.log', 'TraceID', '全链路追踪']
  },
  {
    id: 72,
    questionNumber: 72,
    type: '单选题',
    question: '当主库故障时，备库执行快速 Failover 切换为主库，该操作主要通过哪个工具可视化一键完成？',
    options: ['A. OCP 控制台', 'B. OMA', 'C. OBDUMPER', 'D. OBLOADER'],
    answer: 'A',
    analysis: '主备库容灾管理、计划内切主（Switchover）与应急故障切换（Failover）均由 OCP 提供一键式可视化编排。',
    topicId: 'tools',
    tags: ['OCP', 'Failover', '主备库切换']
  },
  {
    id: 73,
    questionNumber: 73,
    type: '单选题',
    question: '关于 OceanBase 的只读副本（R 副本），它与全功能副本（F 副本）的最本质区别是？',
    options: [
      'A. R 副本没有磁盘 SSTable',
      'B. R 副本不具备 Paxos 成员投票权，异步回放日志，不可当选 Leader',
      'C. R 副本不支持 SQL 查询',
      'D. R 副本只能部署在异地'
    ],
    answer: 'B',
    analysis: 'R 副本拥有完整数据，但没有 Paxos 投票权，不参与写事务多数派确认，专供弱一致性读。',
    topicId: 'ha',
    tags: ['R副本', '无投票权', '弱读副本']
  },
  {
    id: 74,
    questionNumber: 74,
    type: '单选题',
    question: '关于 OceanBase 租户的内存参数配置，以下哪个参数用于配置资源单元的内存上限？',
    options: ['A. MEMORY_SIZE', 'B. MAX_MEMORY', 'C. MEM_CAP', 'D. RAM_LIMIT'],
    answer: 'A',
    analysis: '在 CREATE RESOURCE UNIT 语法中，通过 MEMORY_SIZE 参数定义该单元的独占内存规格（如 MEMORY_SIZE = \'16G\'）。',
    topicId: 'tenant',
    tags: ['MEMORY_SIZE', 'Resource Unit', '内存规格']
  },
  {
    id: 75,
    questionNumber: 75,
    type: '单选题',
    question: '在两地三中心架构中，通常推荐的 Zone 分布是？',
    options: [
      'A. 3 个城市各 1 个机房',
      'B. 2 个同城机房（Zone1, Zone2）+ 1 个异地机房（Zone3）',
      'C. 1 个机房划 3 个 Zone',
      'D. 5 个异地机房'
    ],
    answer: 'B',
    analysis: '经典两地三中心：2 同城机房（毫秒级低延迟写同步）+ 1 异地机房（防范城市级灾难），兼顾性能与异地容灾。',
    topicId: 'ha',
    tags: ['两地三中心', '2同城1异地', '容灾拓扑']
  },
  {
    id: 76,
    questionNumber: 76,
    type: '单选题',
    question: '关于 OceanBase 的回收站（Recyclebin），以下哪类删除操作可以被回收站保护并秒级闪回？',
    options: [
      'A. DROP TABLE 与 TRUNCATE TABLE',
      'B. DELETE FROM table_name',
      'C. UPDATE table_name SET col=val',
      'D. DROP TENANT'
    ],
    answer: 'A',
    analysis: 'Recyclebin 主要拦截并保护误执行的 DROP TABLE、DROP INDEX、TRUNCATE TABLE 等 DDL 操作，支持快速还原。',
    topicId: 'diagnostics',
    tags: ['Recyclebin', 'DROP TABLE', 'TRUNCATE TABLE']
  },
  {
    id: 77,
    questionNumber: 77,
    type: '单选题',
    question: '用于将 OceanBase 中的数据高速批量导出为 CSV 或 SQL 文件的专用命令行工具是？',
    options: ['A. OBLOADER', 'B. OBDUMPER', 'C. OMA', 'D. OBD'],
    answer: 'B',
    analysis: 'OBDUMPER 是 Java 开发的高性能多线程导出工具；OBLOADER 为专用导入工具。',
    topicId: 'tools',
    tags: ['OBDUMPER', '导出工具', '数据导出']
  },
  {
    id: 78,
    questionNumber: 78,
    type: '单选题',
    question: '用于将 CSV / SQL 格式数据高速并发批量导入到 OceanBase 的专用命令行工具是？',
    options: ['A. OBLOADER', 'B. OBDUMPER', 'C. OMA', 'D. OAT'],
    answer: 'A',
    analysis: 'OBLOADER 是官方提供的专用客户端高性能并发导入工具。',
    topicId: 'tools',
    tags: ['OBLOADER', '导入工具', '数据导入']
  },
  {
    id: 79,
    questionNumber: 79,
    type: '单选题',
    question: '在 OceanBase 中，若需要查看当前数据库所有活跃会话的实时执行状态，应查询的系统视图是？',
    options: ['A. GV$SESSION', 'B. GV$OB_SQL_AUDIT', 'C. GV$INSTANCE', 'D. GV$SYSSTAT'],
    answer: 'A',
    analysis: 'GV$SESSION 用于查看全集群当前的活跃及空闲会话状态（包括用户名、客户端 IP、正在执行的 SQL 等）。',
    topicId: 'diagnostics',
    tags: ['GV$SESSION', '会话监控', '活动连接']
  },
  {
    id: 80,
    questionNumber: 80,
    type: '单选题',
    question: '关于 OceanBase 的转储策略，转储生成的 SSTable 类型被称为？',
    options: ['A. Major SSTable', 'B. Minor SSTable', 'C. Baseline SSTable', 'D. Master SSTable'],
    answer: 'B',
    analysis: '转储（Minor Freeze）将冻结的 MemTable 刷入磁盘生成 Minor SSTable；每日大合并生成的基线数据称为 Major SSTable。',
    topicId: 'storage',
    tags: ['Minor SSTable', 'Major SSTable', '转储产物']
  },
  {
    id: 81,
    questionNumber: 81,
    type: '单选题',
    question: 'OceanBase 的敏捷运维交付工具 OAT（OceanBase Admin Toolkit）主要用于部署什么组件？',
    options: [
      'A. OCP、OMS、ODC 等平台管理组件本身',
      'B. 专用于格式化物理磁盘',
      'C. 专用于修改 Linux 内核参数',
      'D. 专用于执行分布式事务协调'
    ],
    answer: 'A',
    analysis: 'OAT（OceanBase Admin Toolkit）是白屏化运维交付工具箱，用于在物理机或容器中快速部署 OCP、OMS 等管理套件本身。',
    topicId: 'tools',
    tags: ['OAT', '运维工具箱', '平台交付']
  },
  {
    id: 82,
    questionNumber: 82,
    type: '单选题',
    question: '关于 OceanBase 的数据一致性，Paxos 协议保证在多少节点确认日志落盘后即可向客户端返回事务提交成功？',
    options: ['A. 1 个节点', 'B. 超过半数节点（多数派，Majority）', 'C. 所有节点 100% 同步', 'D. 2/3 节点'],
    answer: 'B',
    analysis: 'Multi-Paxos 共识协议的核心是多数派（超过半数，即 (N/2)+1）节点落盘确认后即决议提交，无需全量同步。',
    topicId: 'ha',
    tags: ['Paxos', '多数派', 'Majority', '数据一致性']
  },
  {
    id: 83,
    questionNumber: 83,
    type: '单选题',
    question: '在 OceanBase 中，记录 Paxos 副本选举与租约管理事件的日志文件名称是？',
    options: ['A. election.log', 'B. observer.log', 'C. rootservice.log', 'D. trace.log'],
    answer: 'A',
    analysis: 'election.log 记录 Paxos 选主、Lease 租约更新与切主决策事件；rootservice.log 记录 RS 管理事件。',
    topicId: 'diagnostics',
    tags: ['election.log', 'Paxos选举', '切主日志']
  },
  {
    id: 84,
    questionNumber: 84,
    type: '单选题',
    question: '在 OceanBase 集群架构中，下列关于 OBServer 的说法正确的是？',
    options: [
      'A. 分为 Master 节点与 Slave 节点，二者程序二进制不同',
      'B. 采用全对称架构，所有节点物理地位完全对等，运行相同程序代码',
      'C. 必须通过专门的 StorageServer 进行数据读写',
      'D. 计算节点与存储节点在物理上严格分离部署'
    ],
    answer: 'B',
    analysis: 'OceanBase 是 Shared-Nothing 全对称分布式数据库，所有 OBServer 节点完全对等，兼备计算与存储能力，无物理主从之分。',
    topicId: 'architecture',
    tags: ['全对称架构', 'OBServer', 'Shared-Nothing']
  },
  {
    id: 85,
    questionNumber: 85,
    type: '单选题',
    question: '关于 OceanBase 租户资源的扩容，可以通过哪种方式平滑调整算力？',
    options: [
      'A. 修改 RESOURCE UNIT 规格（如增大 MAX_CPU 与 MEMORY_SIZE）',
      'B. 必须先停机删除租户再重新建租户',
      'C. 只能通过增加物理机数量扩容，不支持在线改配置',
      'D. 必须重启整个集群'
    ],
    answer: 'A',
    analysis: 'OceanBase 支持在线动态弹性扩缩容：通过 ALTER RESOURCE UNIT 调整 CPU 和内存规格，或修改 UNIT_NUM 增减节点，全程业务不停机。',
    topicId: 'tenant',
    tags: ['租户扩容', 'RESOURCE UNIT', '在线弹性']
  },
  {
    id: 86,
    questionNumber: 86,
    type: '单选题',
    question: 'OceanBase 中用于协调分布式查询并生成数据流算子（DFO）的组件是？',
    options: ['A. Query Coordinator (QC)', 'B. RootService', 'C. OBProxy', 'D. ConfigServer'],
    answer: 'A',
    analysis: '在并行执行（PX）中，接收客户端 SQL 的节点充当 Query Coordinator（QC），负责生成并行执行计划树、切分 DFO 并分发给各节点执行。',
    topicId: 'storage',
    tags: ['QC', 'Query Coordinator', 'DFO', '并行执行']
  },
  {
    id: 87,
    questionNumber: 87,
    type: '单选题',
    question: '关于 OceanBase 的 sys 租户，以下关于其系统密码初始化的说法正确的是？',
    options: [
      'A. sys 租户 root 用户的初始默认密码为空，首次登录建议立即修改',
      'B. sys 租户默认无法使用 root 登录',
      'C. 初始密码必须为 16 位强密码且无法修改',
      'D. sys 租户不需要任何密码'
    ],
    answer: 'A',
    analysis: '集群初始化完成后，sys 租户内置 root 超级用户的初始密码默认为空，最佳实践是部署完毕后第一时间通过 ALTER USER 设置强密码。',
    topicId: 'tenant',
    tags: ['sys租户', 'root初始密码', '安全配置']
  },
  {
    id: 88,
    questionNumber: 88,
    type: '单选题',
    question: '关于 ODC（开发者中心）对 OceanBase Oracle 模式特性的支持，以下描述正确的是？',
    options: [
      'A. 仅支持简单的 SELECT 查询，不支持 PL/SQL',
      'B. 深度支持 Oracle 模式下的 Package、Procedure、Function 存储过程编写与在线断点调试',
      'C. 不支持存储过程调试',
      'D. 只能在 Linux 命令行下运行'
    ],
    answer: 'B',
    analysis: 'ODC 深度兼容 Oracle 开发习惯，支持 Package、存储过程、函数、触发器的编写、编译与可视化在线断点调试。',
    topicId: 'tools',
    tags: ['ODC', 'PL/SQL调试', 'Oracle模式']
  },
  {
    id: 89,
    questionNumber: 89,
    type: '单选题',
    question: '在 OceanBase 集群中，下列哪个系统视图可以查询所有 OBServer 节点当前的 IP、端口、状态及版本号？',
    options: ['A. GV$OB_SERVERS / __all_server', 'B. GV$OB_SQL_AUDIT', 'C. GV$INSTANCE_CONFIG', 'D. GV$TENANTS'],
    answer: 'A',
    analysis: 'GV$OB_SERVERS（或底层系统表 __all_server）展示集群内所有 OBServer 节点的 IP 地址、SQL 端口 2881、RPC 端口 2882、当前运行状态（active/inactive）及版本号。',
    topicId: 'architecture',
    tags: ['GV$OB_SERVERS', '__all_server', '节点状态']
  }
];
