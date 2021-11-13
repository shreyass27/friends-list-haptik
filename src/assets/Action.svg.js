export const FilledStar = ({ fill = '#000' }) => <svg height='24' width='24' viewBox="0 0 24 24">
    <path fill={fill} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
</svg>;

export const OutlineStar = ({ fill = '#000' }) => <svg height='24' width='24' viewBox="0 0 24 24">
    <path fill={fill} d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
</svg>;

export const Bin = ({ fill = '#000' }) => <svg height='24' width='24' viewBox="0 0 24 24">
    <path fill={fill} d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
</svg>;

export const ChevronRight = ({ fill = '#000' }) => <svg height='24' width='24' viewBox="0 0 24 24">
    <path fill={fill} d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
</svg>;

export const ChevronLeft = ({ fill = '#000' }) => <svg height='24' width='24' viewBox="0 0 24 24">
    <path fill={fill} d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
</svg>;