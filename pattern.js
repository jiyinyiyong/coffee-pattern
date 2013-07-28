// Generated by CoffeeScript 1.6.3
var divide_list, get_type,
  __slice = [].slice;

get_type = function(varable) {
  var as_string;
  as_string = Object.prototype.toString.call(varable);
  return as_string.slice(1, -1).split(' ')[1].toLowerCase();
};

divide_list = function(stack, long_list) {
  var solution;
  if (long_list.length > 0) {
    solution = {
      tag: long_list[0],
      result: long_list[1]
    };
    stack.push(solution);
    return divide_list(stack, long_list.slice(2));
  } else {
    return stack;
  }
};

exports.match = function() {
  var choices, chosen, data, possible, sure;
  data = arguments[0], choices = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  possible = (divide_list([], choices)).filter(function(solution) {
    if (solution.tag == null) {
      return true;
    } else if ((get_type(solution.tag)) === 'regexp') {
      if ((get_type(data)) === 'string') {
        return data.match(solution.tag);
      } else {
        return false;
      }
    } else {
      return data === solution.tag;
    }
  });
  sure = possible.filter(function(solution) {
    return solution.tag != null;
  });
  chosen = sure.length > 0 ? sure[0] : possible[0];
  if (chosen != null) {
    if ((get_type(chosen.result)) === 'function') {
      return chosen.result(data);
    } else {
      return chosen.result;
    }
  } else {
    return chosen;
  }
};