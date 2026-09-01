import { ExamQuestion } from '../../types';

export const judgmentQuestions: ExamQuestion[] = [
  {
    id: 140,
    questionNumber: 1,
    type: '判断题',
    question: 'OceanBase 是全球唯一一个同时刷新了 TPC-C 和 TPC-H 测试世界纪录的分布式数据库。',
    answer: '正确',
    analysis: '正确。OceanBase 曾两次打破 TPC-C 世界纪录（高达 7.07 亿 tpmC），并登顶 30,000GB 规模 TPC-H 世界纪录（1526 万 QphH），验证了卓越的 HTAP 混合负载引擎能力。',
    topicId: 'overview',
    tags: ['TPC-C', 'TPC-H', 'HTAP']
  },
  {
    id: 141,
    questionNumber: 2,
    type: '判断题',
    question: 'Zone 是一个逻辑概念，一个 Zone 内的所有 OBServer 必须拥有完全相同的硬件配置和相同数量的 CPU/内存资源。',
    answer: '错误',
    analysis: '错误。Zone 是逻辑概念，同一个 Zone 内部或不同 Zone 之间均支持异构硬件混部部署，不强制要求所有服务器硬件规格相同。',
    topicId: 'architecture',
    tags: ['Zone概念', '异构部署', '硬件不同构']
  },
  {
    id: 142,
    questionNumber: 3,
    type: '判断题',
    question: '一个 Zone 会自动对应同城的一个机房，不同的 Zone 会自动对应不同城市的机房。',
    answer: '错误',
    analysis: '错误。Zone 是纯逻辑隔离域，系统不会自动绑定物理机房或地理城市，映射关系由架构师在部署规划时人工灵活指定。',
    topicId: 'architecture',
    tags: ['Zone物理映射', '非自动绑定', '逻辑概念']
  },
  {
    id: 143,
    questionNumber: 4,
    type: '判断题',
    question: '在 OceanBase V4 中，日志流和数据分片是一对一对应的，一个数据分片就必须有一个独立的日志流。',
    answer: '错误',
    analysis: '错误。在 V4.x 中，数据分片（Tablet）与日志流（Log Stream）是“多对一（N:1）”的关系，多个分片共享一个日志流，极大降低了 Paxos 心跳和线程开销。',
    topicId: 'ha',
    tags: ['日志流', '多对一', 'V4架构演进']
  },
  {
    id: 144,
    questionNumber: 5,
    type: '判断题',
    question: 'OceanBase 数据库提供企业级高可用能力，并且在处于任何状态下，其集群只能以全同步复制模式运行。',
    answer: '错误',
    analysis: '错误。OceanBase 内部基于 Multi-Paxos 多数派共识协议运行，只要多数派节点确认即可提交，无需所有节点全同步；在主备库容灾中也支持异步复制等多种保护模式。',
    topicId: 'ha',
    tags: ['多数派协议', '非全同步', 'Paxos']
  },
  {
    id: 145,
    questionNumber: 6,
    type: '判断题',
    question: 'WR 和 ASH 报告分析资源瓶颈是一个离线的过程，不需要在问题发生时实时手工抓取视图数据。',
    answer: '正确',
    analysis: '正确。ASH 和 WR 会在后台自动高频采样并将关键快照持久化，事后可随时指定故障发生的时间区间提取报告进行离线回溯诊断。',
    topicId: 'diagnostics',
    tags: ['ASH', 'WR', '离线回溯诊断']
  },
  {
    id: 146,
    questionNumber: 7,
    type: '判断题',
    question: '在 OceanBase 中，内存（Memory）资源的分配是独占的，CPU 资源则是可超卖共享的。',
    answer: '正确',
    analysis: '正确。内存严格独占预留不可超卖（防 OOM）；CPU 则通过 MIN_CPU（保底）和 MAX_CPU（弹性上限）调度，支持超卖以最大化算力利用率。',
    topicId: 'tenant',
    tags: ['内存独占', 'CPU超卖', 'MIN_CPU/MAX_CPU']
  },
  {
    id: 147,
    questionNumber: 8,
    type: '判断题',
    question: '在 OceanBase 的 LSM-Tree 存储引擎中，数据更新会直接修改磁盘上的数据块以保证数据最新。',
    answer: '错误',
    analysis: '错误。磁盘上的基线 SSTable 是只读不可变的（Immutable），更新直接写入内存 MemTable，查询时在内存中 Merge on Read，夜间通过大合并批量写入，绝不进行磁盘原地覆盖写。',
    topicId: 'storage',
    tags: ['LSM-Tree只读', '无原地覆写', 'Merge on Read']
  },
  {
    id: 148,
    questionNumber: 9,
    type: '判断题',
    question: '对于历史数据的删除（DELETE），OceanBase 的存储引擎会立刻将磁盘上对应的数据块抹除，以立刻释放磁盘空间。',
    answer: '错误',
    analysis: '错误。DELETE 是在内存中写入一条 Tombstone 墓碑标记，磁盘空间只有在每日大合并（Major Compaction）全局多路归并时才会真正物理清除并释放。',
    topicId: 'storage',
    tags: ['Tombstone', 'DELETE机制', '大合并空间释放']
  },
  {
    id: 149,
    questionNumber: 10,
    type: '判断题',
    question: '如果用户不小心删除了表中的核心数据，可以通过 OceanBase 提供的 Flashback（闪回）功能，将表数据快速恢复到过去某个时间点的状态。',
    answer: '正确',
    analysis: '正确。基于 MVCC 历史多版本快照，支持通过 AS OF TIMESTAMP/SCN 闪回查询，以及利用回收站 FLASHBACK TABLE ... TO BEFORE DROP 秒级恢复误删整表。',
    topicId: 'diagnostics',
    tags: ['Flashback', '闪回查询', '回收站']
  },
  {
    id: 150,
    questionNumber: 11,
    type: '判断题',
    question: 'OceanBase 的社区版和企业版采用完全不同的底层分布式共识机制。',
    answer: '错误',
    analysis: '错误。社区版与企业版同内核同源，底层 Paxos 多数派复制、LSM-Tree 存储引擎、2PC 分布式事务与高可用容灾机制完全一致。',
    topicId: 'overview',
    tags: ['社区版', '企业版', '同内核同架构']
  },
  {
    id: 151,
    questionNumber: 12,
    type: '判断题',
    question: '在两地三中心架构中，当同城一个机房发生断电故障时，数据能够保证零丢失（RPO = 0）。',
    answer: '正确',
    analysis: '正确。同城 1 机房断电后，剩余 1 同城 + 1 异地副本仍构成多数派（2/3），基于 Paxos 多数派协议可秒级自动切主且数据零丢失（RPO=0）。',
    topicId: 'ha',
    tags: ['两地三中心', 'RPO=0', '多数派容灾']
  },
  {
    id: 152,
    questionNumber: 13,
    type: '判断题',
    question: 'OceanBase 支持读未提交（Read Uncommitted）事务隔离级别。',
    answer: '错误',
    analysis: '错误。OceanBase 专注金融级高可靠场景，不支持读未提交（Read Uncommitted）；支持读已提交（默认）、可重复读与串行化。',
    topicId: 'transaction',
    tags: ['不支持读未提交', '事务隔离级别', '金融级']
  },
  {
    id: 153,
    questionNumber: 14,
    type: '判断题',
    question: '通过 Tablegroup 表组将两张关联表的分区对齐后，跨表关联查询可以在本地节点完成 Partition-Wise Join，无需跨节点网络传输。',
    answer: '正确',
    analysis: '正确。Tablegroup 使强关联分区的同号分区物理聚集在同一节点，将分布式关联转化为本地 Join，消除跨机 RPC 和分布式事务开销。',
    topicId: 'transaction',
    tags: ['Tablegroup', 'Partition-Wise Join', '本地Join']
  },
  {
    id: 154,
    questionNumber: 15,
    type: '判断题',
    question: 'OceanBase 的 OMA 工具主要用于执行生产环境的一站式全量数据迁移与实时增量同步。',
    answer: '错误',
    analysis: '错误。OMA 是迁前评估与改写工具；负责执行生产全量迁移与增量 CDC 实时同步的工具是 OMS（OceanBase Migration Service）。',
    topicId: 'tools',
    tags: ['OMA', 'OMS', '工具职能边界']
  },
  {
    id: 155,
    questionNumber: 16,
    type: '判断题',
    question: '生产环境中部署 OceanBase 时，必须关闭 Linux 操作系统的 Swap 分区以防止进程卡顿。',
    answer: '正确',
    analysis: '正确。关闭 Swap 是生产部署硬性要求，防止物理内存被换出至磁盘导致线程响应缓慢与 Paxos 心跳超时误判。',
    topicId: 'architecture',
    tags: ['Swap', '生产部署要求', '关闭Swap']
  },
  {
    id: 156,
    questionNumber: 17,
    type: '判断题',
    question: 'sys 租户作为超级管理员租户，可以随时无视权限直接修改普通业务租户中的用户业务数据表。',
    answer: '错误',
    analysis: '错误。出于多租户安全与数据隐私隔离规范，sys 租户专职负责集群级资源与拓扑元数据管理，严禁随意读取和篡改普通租户的业务数据。',
    topicId: 'tenant',
    tags: ['sys租户', '数据安全', '权限隔离']
  },
  {
    id: 157,
    questionNumber: 18,
    type: '判断题',
    question: 'OceanBase 的高级编码（Encoding）技术支持在微块不解压的情况下，直接在内存中下推执行过滤与聚合计算。',
    answer: '正确',
    analysis: '正确。高级编码（如字典编码、前缀编码）具有直接计算特性，支持算子下推，显著减少 CPU 解压开销与内存带宽占用。',
    topicId: 'storage',
    tags: ['高级编码', '算子下推', '不解压计算']
  },
  {
    id: 158,
    questionNumber: 19,
    type: '判断题',
    question: '一个 Resource Pool（资源池）可以同时绑定给多个不同的用户租户使用。',
    answer: '错误',
    analysis: '错误。Resource Pool 在 OceanBase 中必须独占分配给单个租户使用，不能多个租户共享同一个 Resource Pool。',
    topicId: 'tenant',
    tags: ['Resource Pool', '独占分配', '禁止共享']
  },
  {
    id: 159,
    questionNumber: 20,
    type: '判断题',
    question: 'OceanBase 的两阶段提交（2PC）协议中，事务协调者是无状态的（Stateless），自身不写入额外的 Paxos 日志。',
    answer: '正确',
    analysis: '正确。协调者无状态化消除了单点日志 I/O 瓶颈，若协调者宕机，新协调者通过向各参与者反向查询持久化状态即可推导提交或回滚决议。',
    topicId: 'transaction',
    tags: ['2PC', '无状态协调者', '去中心化']
  },
  {
    id: 160,
    questionNumber: 21,
    type: '判断题',
    question: '在 OceanBase 中，普通用户租户创建成功后，可以通过 ALTER TENANT 命令随意将其从 MySQL 兼容模式切换为 Oracle 兼容模式。',
    answer: '错误',
    analysis: '错误。租户的兼容模式（COMPATIBILITY_MODE）在创建时确定后终身不可变更，无法在 MySQL 模式与 Oracle 模式之间相互切换。',
    topicId: 'tenant',
    tags: ['兼容模式不可修改', 'CREATE TENANT', 'MySQL/Oracle']
  },
  {
    id: 161,
    questionNumber: 22,
    type: '判断题',
    question: '在 OceanBase 分布式架构中，即使没有 OBProxy 代理层，客户端直接连接某台 OBServer 也可以正常执行涉及其他节点的分布式查询。',
    answer: '正确',
    analysis: '正确。每个 OBServer 节点均具备完整的 SQL 解析与分布式路由转发能力，接收请求的节点会作为 SQL 协调者远程调度数据，无需依赖外部代理也能返回正确结果。',
    topicId: 'architecture',
    tags: ['OBServer路由', '全对称', '直连访问']
  },
  {
    id: 162,
    questionNumber: 23,
    type: '判断题',
    question: 'OceanBase 的只读型副本（R 副本）会参与 Paxos 投票选举，当主库宕机时 R 副本可以被选为主副本（Leader）。',
    answer: '错误',
    analysis: '错误。R 副本（Read-Only Replica）不具备 Paxos 成员投票权，仅异步回放日志用于弱读分流，绝不能参与 Paxos 选主，也无法当选为 Leader。',
    topicId: 'ha',
    tags: ['R副本', '无投票权', '不可选主']
  },
  {
    id: 163,
    questionNumber: 24,
    type: '判断题',
    question: '在 OceanBase 中，宏块（Macro Block）的大小固定为 2MB，是数据在磁盘上写入与空间分配的基本单位。',
    answer: '正确',
    analysis: '正确。宏块固定大小为 2MB，在磁盘大文件中连续分配；微块（Micro Block）通常 16KB 左右，是内存缓存（BlockCache）的基本单元。',
    topicId: 'storage',
    tags: ['宏块', 'Macro Block', '2MB']
  },
  {
    id: 164,
    questionNumber: 25,
    type: '判断题',
    question: 'GV$OB_SQL_AUDIT 系统视图会完整保留每条 SQL 执行后返回给客户端的所有数据结果集。',
    answer: '错误',
    analysis: '错误。出于内存保护、性能开销以及数据安全合规原因，SQL Audit 仅记录 SQL 文本、执行耗时、等待事件和影响行数等画像元数据，绝不记录 SQL 结果集。',
    topicId: 'diagnostics',
    tags: ['GV$OB_SQL_AUDIT', '不存结果集', '安全合规']
  },
  {
    id: 165,
    questionNumber: 26,
    type: '判断题',
    question: 'OceanBase 的日志型副本（L 副本）只同步并持久化事务日志（Clog），不保存基线 SSTable 数据，但具有 Paxos 投票权。',
    answer: '正确',
    analysis: '正确。L 副本（Log Replica）专用于作为低成本仲裁节点参与多数派投票，不占用基线数据磁盘空间。',
    topicId: 'ha',
    tags: ['L副本', '日志副本', '仲裁投票']
  },
  {
    id: 166,
    questionNumber: 27,
    type: '判断题',
    question: '一台物理服务器上可以同时创建并部署同一个租户的多个资源单元（Unit）。',
    answer: '错误',
    analysis: '错误。OceanBase 强制遵循“单机单租户单 Unit”原则，同一台物理 OBServer 上同一个租户最多只能分配 1 个 Unit，防止单点资源冲突与副本共存。',
    topicId: 'tenant',
    tags: ['单机单Unit', '资源约束', 'UNIT_NUM']
  },
  {
    id: 167,
    questionNumber: 28,
    type: '判断题',
    question: 'OceanBase 的物理备份支持全量备份与增量备份，并且配合持续日志归档可以实现 PITR（Point-in-Time Recovery）任意时间点恢复。',
    answer: '正确',
    analysis: '正确。OceanBase 支持全量/增量物理备份与连续 Clog 归档，恢复时先拉取基线快照再重放日志，可将租户精准恢复至过去的任意时间点。',
    topicId: 'ha',
    tags: ['物理备份', 'PITR', '日志归档']
  },
  {
    id: 168,
    questionNumber: 29,
    type: '判断题',
    question: 'OceanBase 在建表时如果不显式指定主键，系统会直接拒绝建表并报错。',
    answer: '错误',
    analysis: '错误。若用户未显式指定主键，OceanBase 会自动为表生成一个隐藏自增列 `__pk_increment` 作为隐藏主键，依然能够成功建表。',
    topicId: 'transaction',
    tags: ['主键约束', '__pk_increment', '隐藏主键']
  },
  {
    id: 169,
    questionNumber: 30,
    type: '判断题',
    question: 'OceanBase 的 Plan Cache（执行计划缓存）可以缓存参数化 SQL 的物理执行计划，显著降低硬解析带来的 CPU 开销。',
    answer: '正确',
    analysis: '正确。Plan Cache 避免了高频 OLTP 查询反复进行语法解析与代价计算（避免 Hard Parse），大幅提升了吞吐量并降低延迟。',
    topicId: 'storage',
    tags: ['Plan Cache', '避免硬解析', '执行计划缓存']
  },
  {
    id: 170,
    questionNumber: 31,
    type: '判断题',
    question: '在两地三中心架构中，由于异地机房距离远、网络延迟高，同城机房正常情况下的每一次写事务提交都必须等待异地机房确认后才能返回成功。',
    answer: '错误',
    analysis: '错误。两地三中心为 3 副本结构，基于 Paxos 多数派只需 2 票确认。正常情况下同城 2 个 Zone 即可快速达成多数派提交并返回客户端，异地机房异步并发确认，不影响同城事务毫秒级低延迟。',
    topicId: 'ha',
    tags: ['两地三中心', '同城低延迟', '多数派机制']
  },
  {
    id: 171,
    questionNumber: 32,
    type: '判断题',
    question: 'OceanBase 的 ODC（开发者中心）支持在网页端对 Oracle 模式下的存储过程和 Package 进行可视化在线断点调试。',
    answer: '正确',
    analysis: '正确。ODC 深度兼容企业级 Oracle 研发场景，支持 PL/SQL 存储过程、函数、包体的在线断点单步调试。',
    topicId: 'tools',
    tags: ['ODC', 'PL/SQL调试', '断点调试']
  },
  {
    id: 172,
    questionNumber: 33,
    type: '判断题',
    question: 'OceanBase 转储（Minor Compaction）后生成的 Minor SSTable 会替换掉所有的基线 Major SSTable。',
    answer: '错误',
    analysis: '错误。转储仅将内存冻结的 MemTable 刷入磁盘形成增量 Minor SSTable，基线 Major SSTable 保持不变；只有每日大合并（Major Compaction）才会全局重写基线 Major SSTable。',
    topicId: 'storage',
    tags: ['转储与大合并', 'Minor SSTable', '基线不变']
  },
  {
    id: 173,
    questionNumber: 34,
    type: '判断题',
    question: '使用 OBDUMPER 工具导出数据时，必须在命令中强制开启旁路导入 direct 选项。',
    answer: '错误',
    analysis: '错误。OBDUMPER 是数据导出工具；direct（旁路导入）是数据导入时的加速参数，导出工具无此强制要求。',
    topicId: 'tools',
    tags: ['OBDUMPER', '导出工具', '参数规范']
  },
  {
    id: 174,
    questionNumber: 35,
    type: '判断题',
    question: 'OceanBase 的 MVCC 读写并发机制中，快照读查询不会给数据行加读锁，写事务也不会被读事务所阻塞。',
    answer: '正确',
    analysis: '正确。MVCC 实现了真正的读写互不阻塞：读操作读历史快照版本（无锁），写操作加行级排他锁，两者互不干扰。',
    topicId: 'transaction',
    tags: ['MVCC', '读写并发', '无锁读']
  },
  {
    id: 175,
    questionNumber: 36,
    type: '判断题',
    question: '通过 Primary Zone 语法，用户可以为租户指定 Leader 副本优先分布的 Zone 及其主备优先级。',
    answer: '正确',
    analysis: '正确。PRIMARY_ZONE 参数用于控制租户内各个分区的选主偏好（如 "zone1,zone2;zone3"），支持灵活定制业务就近访问拓扑。',
    topicId: 'ha',
    tags: ['Primary Zone', 'Leader选主', '优先级拓扑']
  },
  {
    id: 176,
    questionNumber: 37,
    type: '判断题',
    question: 'OceanBase 集群生产部署前置检查中，要求所有物理节点之间的 NTP 时钟偏差绝对值必须小于 100ms。',
    answer: '正确',
    analysis: '正确。时钟偏差 < 100ms 是生产部署前置硬性指标，保障分布式事务时间戳与选举租约正常工作。',
    topicId: 'architecture',
    tags: ['时钟偏差', '100ms', '前置检查']
  },
  {
    id: 177,
    questionNumber: 38,
    type: '判断题',
    question: 'OceanBase 的 OCP 平台支持按 Zone 进行集群版本滚动无感升级，整个升级过程中业务读写不会中断。',
    answer: '正确',
    analysis: '正确。OCP 利用 Paxos 多数派切主与单 Zone 滚动升级技术，实现内核升级期间业务读写不中断的零停机平滑升级。',
    topicId: 'tools',
    tags: ['OCP', '滚动升级', '零停机']
  },
  {
    id: 178,
    questionNumber: 39,
    type: '判断题',
    question: 'OceanBase 的 Key 分区和 Hash 分区都不支持作为二级分区的子分区方式。',
    answer: '错误',
    analysis: '错误。OceanBase 完整支持 Range、List、Hash、Key 作为二级分区方式，可以与一级分区自由组合为二级组合分区表。',
    topicId: 'transaction',
    tags: ['二级分区', '组合分区', 'Hash/Key']
  },
  {
    id: 179,
    questionNumber: 40,
    type: '判断题',
    question: 'OceanBase 数据库的去中心化架构意味着集群内部没有任何物理单点瓶颈，所有 OBServer 在架构上完全对等。',
    answer: '正确',
    analysis: '正确。全对称、Shared-Nothing、无物理 Master 单点瓶颈，总控 RS 自身也通过 Paxos 自愈，是 OceanBase 架构的核心优势。',
    topicId: 'overview',
    tags: ['去中心化', '全对称', 'Shared-Nothing']
  }
];
