type FileSource = { path: string };
type DBSource = { connectionUrl: string };

type Source = FileSource | DBSource;

const fileSource: FileSource = {
  path: 'some/path/to/file.csv',
};
const dbSource: DBSource = {
  connectionUrl: 'some-connection-url',
};

function loadData(source: Source) {
  // fileSource일 경우 path 열기
  if ('path' in source) {
    source.path;
    return;
  }
  // dbSource일 경우 connectionUrl 열기
  source.connectionUrl;
}
