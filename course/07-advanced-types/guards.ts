type FileSource = {
  type: 'file';
  path: string;
};
type DBSource = {
  type: 'db';
  connectionUrl: string;
};

type Source = FileSource | DBSource;

const fileSource: FileSource = {
  type: 'file',
  path: 'some/path/to/file.csv',
};
const dbSource: DBSource = {
  type: 'db',
  connectionUrl: 'some-connection-url',
};

function loadData(source: Source) {
  // fileSource일 경우 path 열기
  if (source.type === 'file') {
    source.path;
    return;
  }
  // dbSource일 경우 connectionUrl 열기
  source.connectionUrl;
}
